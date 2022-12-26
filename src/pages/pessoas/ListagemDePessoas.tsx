import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "../../shared/hooks";
import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";


export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const { debounce } = useDebounce(2000);

  const onSearch = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {

    debounce(() => {
      PessoasServices.getAll(1, onSearch)
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
            return;
          }

          console.log(result);
        });
    });

  }, [onSearch]);

  return (
    <LayoutBaseDePagina
      title="Listagem de Pessoas"
      toolBar={
        <FerramentasDaListagem
          showSearchInput
          textNewButton="Nova"
          searchText={onSearch}
          onChangeSearchText={text => setSearchParams({ busca: text }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina>
  );
};