import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";
import { FerramentasDaListagem } from "../../shared/components";


export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams("");

  const onSearch = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    PessoasServices.getAll(1, onSearch)
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
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