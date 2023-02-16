import { Box, Typography } from '@mui/material';

interface IHeader {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: IHeader) => {
  return (
    <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "20px", userSelect: "none" }}>
      <Typography variant='h1' sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant='h3' sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
        {subtitle}
      </Typography>
    </Box>
  )
}
