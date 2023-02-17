import React, { useEffect, useState } from "react";

import { Box, CssBaseline, AppBar, Drawer, List, IconButton, Checkbox, FormControlLabel, FormGroup, alpha, InputBase, styled, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { IChildren } from "../utils/interfaces";
import products from "../json/products.json";
import { useDebounce } from "../utils/useDebounce";

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
  padding: theme.spacing(2, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: "2",
  color: "var(--cor-de-texto)"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    position: "absolute",
    backgroundColor: "whitesmoke",
    border: "1px solid #efefef",
    borderRadius: "6px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '20ch',
    transition: "0.5s",
    '&:hover': {
      backgroundColor: "white",
      borderColor: "lightgray",
      boxShadow: "0px 0px 0px 5px rgb(7, 196, 230, 0.2)",
      transition: "0.5s",
    },
    '&:focus': {
      backgroundColor: "white",
      borderColor: "lightgray",
      boxShadow: "0px 0px 0px 5px rgb(7, 196, 230, 0.2)",
      transition: "0.5s",
    }
  },
}));

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

interface IMenu extends IChildren {
  searchInput: (query: string) => void;
  onChangeFilter: (filterValue: string) => void;
}

export const Menu: React.FC<IMenu> = ({ children, searchInput, onChangeFilter }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState<string>('');

  const debounceQuery = useDebounce(query);
  const productCategories = products.data.nodes.map((product) => product.category.name);
  const uniqueCategories = Array.from(new Set(productCategories));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  useEffect(() => {
    searchInput(debounceQuery);
  }, [debounceQuery])

  const drawer = (
    <div>
      <List sx={{
        width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", gap: "10px", padding: "40px 0px"
      }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
          <img src="https://www.svgrepo.com/show/425689/grocery-store-hygiene.svg" alt="logo" style={{ width: "100px", height: "100px" }} />
        </div>
        <Root>
          <Divider textAlign="left" sx={{ userSelect: "none", fontWeight: 600, color: "var(--cor-primaria)", fontFamily: "'Source Sans Pro', sans-serif;" }}>
            Pesquisa
          </Divider>
        </Root>
        <Search sx={{ marginBottom: "40px", marginTop: "10px", paddingLeft: "38px" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Digite aqui..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Search>
        <Root>
          <Divider textAlign="left" sx={{ userSelect: "none", fontWeight: 600, color: "var(--cor-primaria)", fontFamily: "'Source Sans Pro', sans-serif;" }}>
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
                      transform: "scale(1.3)"
                    }
                  }}
                />
              }
              label={product}
              onChange={() => onChangeFilter(product)}
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
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", left: 20, top: 6, display: { md: 'none' }, color: "var(--cor-destaque)" }}
        >
          <MenuIcon sx={{ fontSize: "2.8rem" }} />
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
