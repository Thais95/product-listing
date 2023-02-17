import { Box, Typography } from '@mui/material';

interface IHeader {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: IHeader) => {
  return (
    <Box sx={{
      width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "40px", textAlign: "center", userSelect: "none", marginTop: "40px", marginBottom: "40px"
    }}><Typography component='h1' sx={{ fontSize: "1.8rem", fontWeight: 700, color: "#414141", marginBottom: "-40px", fontFamily: "'Source Sans Pro', sans-serif;" }}>
        Produtos de
      </Typography>
      <Typography component='h1' sx={{ fontSize: "3rem", fontWeight: 700, color: "var(--cor-destaque)", fontFamily: "'Source Sans Pro', sans-serif;" }}>
        {title}
      </Typography>
      <Typography component='h3' sx={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--cor-de-texto)", fontFamily: "'Source Sans Pro', sans-serif;", marginTop: "40px" }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
