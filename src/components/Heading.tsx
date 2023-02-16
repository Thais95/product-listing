import { Box, Typography } from '@mui/material';

interface IHeader {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: IHeader) => {
  return (
    <Box sx={{
      width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", textAlign: "center", userSelect: "none", marginTop: "40px"
    }}>
      <Typography component='h1' sx={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--cor-de-texto)" }}>
        {title}
      </Typography>
      <Typography component='h3' sx={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--cor-de-texto)" }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
