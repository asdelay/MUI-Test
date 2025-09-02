import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./i18n";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
