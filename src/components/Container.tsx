import { Container } from '@mui/material';

interface IChildren {
  children: React.ReactNode;
}

export const MainContainer: React.FC<IChildren> = ({ children }) => {
  return (
    <Container maxWidth={false} disableGutters sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "whitesmoke", width: "100%", minHeight: "100vh" }}>
      {children}
    </Container>
  )
}
