import React from "react";

import { Box, CssBaseline, AppBar, Drawer, List, ListItem, ListItemText, IconButton, Checkbox, FormControlLabel, FormGroup, alpha, InputBase, styled, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { IChildren } from "../utils/interfaces";
import products from "../json/products.json";

const drawerWidth = 340;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    border: "2px solid #efefef",
    borderRadius: "6px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: "1s",
    width: '100%',
    '&:focus': {
      border: "2px solid var(--cor-destaque)",
      transition: "1s"
    },
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export const Menu: React.FC<IChildren> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const productCategories = products.data.nodes.map((product) => product.category.name);
  const uniqueCategories = Array.from(new Set(productCategories));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <List sx={{
        width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: "12px", padding: { lg: "40px 0px", xl: "0" }
      }}>
        <Root>
          <Divider textAlign="left" sx={{ userSelect: "none", fontWeight: 600, color: "var(--cor-de-texto)" }}>
            Pesquisa
          </Divider>
        </Root>
        <Search sx={{ marginBottom: "40px", paddingLeft: "38px" }}>
          <SearchIconWrapper>
            <SearchIcon
              sx={{
                fill: "var(--cor-de-texto)"
              }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Digite aqui..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Root>
          <Divider textAlign="left" sx={{ userSelect: "none", fontWeight: 600, color: "var(--cor-de-texto)" }}>
            Filtros
          </Divider>
        </Root>
        {uniqueCategories.map((product, index) => (
          <FormGroup key={index} sx={{ paddingLeft: "38px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "var(--cor-primaria)",
                    transition: "0.5s",
                    '&.Mui-checked': {
                      color: "var(--cor-destaque)",
                      transition: "0.5s",
                      transform: "scale(1.2)"
                    }
                  }}
                />
              }
              label={product}
              sx={{
                userSelect: "none",
                color: "var(--cor-primaria)"
              }}
            />
          </FormGroup>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          boxShadow: "none"
        }}
      >
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", left: 20, top: 6, display: { md: 'none' } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              border: "none"
            }
          }}
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` }, backgroundColor: "var(--cor-de-fundo)", minHeight: "100vh"
        }}>
        {children}
      </Box>
    </Box >
  )
}
