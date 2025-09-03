import { Container, useColorScheme } from "@mui/material";
import { Outlet } from "react-router";

const PageLayout = () => {
  const { mode } = useColorScheme();
  if (!mode) {
    console.log(`mode is ${mode}`);
    return null;
  }
  return (
    <div>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </div>
  );
};

export default PageLayout;
