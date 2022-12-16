import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from "@mui/material";

import { Environment } from "../../environment";

interface IFerramentasDaListagemProps {
  searchText?: string;
  showSearchInput?: boolean;
  onChangeSearchText?: (text: string) => void;
  textNewButton?: string;
  showNewButton?: boolean;
  onClickNewButton?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  searchText = "",
  showSearchInput = false,
  onChangeSearchText,
  textNewButton = "Novo",
  showNewButton = true,
  onClickNewButton,
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
      {showSearchInput && (
        <Box display="flex" alignItems="center" color="secondary">
          <InputAdornment position="start" >
            <Icon>search</Icon>
          </InputAdornment>

          <TextField
            color="secondary"
            size="small"
            value={searchText}
            label={Environment.INPUT_DE_BUSCA}
            onChange={(e) => onChangeSearchText?.(e.target.value)}
          />
        </Box>
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            onClick={onClickNewButton}
            endIcon={<Icon>add</Icon>}
          >
            {textNewButton}
          </Button>
        )}
      </Box>
    </Box>
  );
};