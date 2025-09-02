import { Container } from "@mui/material";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div>
      <Container sx={{ height: "100vh" }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default PageLayout;
