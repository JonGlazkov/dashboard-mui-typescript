import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página Inicial"
      toolBar={(
        <FerramentasDaListagem 
          showSearchInput
          textNewButton="Novo"
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};