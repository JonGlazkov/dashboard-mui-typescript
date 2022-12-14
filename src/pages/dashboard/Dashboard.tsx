import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página Inicial"
      toolBar={(
        <BarraDeFerramentas 
          showSearchInput
          textNewButton="Novo"
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};