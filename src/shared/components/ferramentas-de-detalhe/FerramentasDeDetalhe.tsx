import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
  newButtonText?: string;

  showNewButton?: boolean;
  showBackButton?: boolean;
  showDeleteButton?: boolean;
  showSaveButton?: boolean;
  showSaveAndCloseButton?: boolean;

  showNewButtonLoading?: boolean;
  showBackButtonLoading?: boolean;
  showDeleteButtonLoading?: boolean;
  showSaveButtonLoading?: boolean;
  showSaveAndCloseButtonLoading?: boolean;

  onClickNewButton?: () => void;
  onClickBackButton?: () => void;
  onClickDeleteButton?: () => void;
  onClickSaveButton?: () => void;
  onClickSaveAndCloseButton?: () => void;
}


export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  newButtonText = "Novo",

  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveAndCloseButton = false,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading = false,

  onClickNewButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSaveButton,
  onClickSaveAndCloseButton,
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {(showSaveButton && !showSaveButtonLoading) && (
        <Button
          color="primary"
          variant="contained"
          disableElevation
          onClick={onClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {showSaveButtonLoading && (
        <Skeleton width={110} height={60} />

      )}
      {(showSaveAndCloseButton && !showSaveAndCloseButtonLoading) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={onClickSaveAndCloseButton}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {showSaveAndCloseButtonLoading && (
        <Skeleton width={180} height={60} />

      )}

      {(showDeleteButton && !showDeleteButtonLoading) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={onClickDeleteButton}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {showDeleteButtonLoading && (
        <Skeleton width={110} height={60} />

      )}

      {(showNewButton && !showNewButtonLoading) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={onClickNewButton}
          startIcon={<Icon>add</Icon>}
        >
          {newButtonText}
        </Button>
      )}
      {showNewButtonLoading && (
        <Skeleton width={110} height={60} />

      )}

      <Divider variant="middle" orientation="vertical" />

      {(showBackButton && !showBackButtonLoading) && (
        <Button
          color="primary"
          variant="outlined"
          disableElevation
          onClick={onClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>)}
      {showBackButtonLoading && (
        <Skeleton width={110} height={60} />

      )}
    </Box>
  );
};