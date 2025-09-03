import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./i18n";
import { MainPage } from "./pages/MainPage";
import PageLayout from "./components/PageLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
