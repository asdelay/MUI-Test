import { Container } from "@mui/material";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </div>
  );
};

export default PageLayout;
