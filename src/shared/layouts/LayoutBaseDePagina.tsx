import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  title: string;

  children: React.ReactNode
}


export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, title }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>
              menu
            </Icon>
          </IconButton>
        )}

        <Typography variant="h5">
          {title}
        </Typography>
      </Box>

      <Box>
        Barra de Ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  );
};