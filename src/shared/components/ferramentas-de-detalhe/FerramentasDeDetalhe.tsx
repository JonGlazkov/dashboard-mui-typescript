import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Theme } from "@mui/system";

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
  showSaveAndCloseButton: showSaveAndBackButton = false,

  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveAndCloseButtonLoading: showSaveAndBackButtonLoading = false,

  onClickNewButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSaveButton,
  onClickSaveAndCloseButton,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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
          color="secondary"
          variant="contained"
          disableElevation
          onClick={onClickSaveButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant="button" noWrap >
            Salvar
          </Typography>
        </Button>
      )}
      {showSaveButtonLoading && (
        <Skeleton width={110} height={60} />

      )}
      {(showSaveAndBackButton && !showSaveAndBackButtonLoading && !smDown && !mdDown) && (
        <Button
          color="secondary"
          variant="outlined"
          disableElevation
          onClick={onClickSaveAndCloseButton}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant="button" noWrap >
            Salvar e voltar
          </Typography>
        </Button>
      )}
      {(showSaveAndBackButtonLoading && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />

      )}

      {(showDeleteButton && !showDeleteButtonLoading) && (
        <Button
          color="secondary"
          variant="outlined"
          disableElevation
          onClick={onClickDeleteButton}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant="button" noWrap >
            Apagar
          </Typography>
        </Button>
      )}
      {showDeleteButtonLoading && (
        <Skeleton width={110} height={60} />

      )}

      {(showNewButton && !showNewButtonLoading && !smDown) && (
        <Button
          color="secondary"
          variant="outlined"
          disableElevation
          onClick={onClickNewButton}
          startIcon={<Icon>add</Icon>}
        >
          <Typography variant="button" noWrap >
            {newButtonText}
          </Typography>
        </Button>
      )}
      {(showNewButtonLoading && !smDown) && (
        <Skeleton width={110} height={60} />

      )}

      { (
        showBackButton && (showNewButton || showDeleteButton || showSaveButton || showSaveAndBackButton)
      ) && (
        <Divider variant="middle" orientation="vertical" />
      )}

      {(showBackButton && !showBackButtonLoading) && (
        <Button
          color="secondary"
          variant="outlined"
          disableElevation
          onClick={onClickBackButton}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography variant="button" noWrap >
            Voltar
          </Typography>
        </Button>)}
      {showBackButtonLoading && (
        <Skeleton width={110} height={60} />

      )} 
    </Box>
  );
};