import { Box } from '@mui/material';
import { Header } from '../components/Heading';
import { Menu } from '../components/Menu';

export const Homepage = () => {
  return (
    <Menu>
      <Header
        title='Produtos de Higiene Pessoal'
        subtitle='120 itens encontrados'
      />

      <Box sx={{
        width: "100%", display: "flex", justifyContent: "space-between"
      }}>
      </Box>
    </Menu >
  )
}
