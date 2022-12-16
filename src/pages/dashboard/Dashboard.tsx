import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts/LayoutBaseDePagina";


export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página Inicial"
      toolBar={(
        <FerramentasDeDetalhe
          showSaveAndCloseButton
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};