import { Container, useColorScheme } from "@mui/material";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const PageLayout = () => {
  const { mode } = useColorScheme();
  if (!mode) {
    console.log(`mode is ${mode}`);
    return null;
  }
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};

export default PageLayout;
