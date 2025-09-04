import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./i18n";
import { MainPage } from "./pages/MainPage";
import PageLayout from "./components/PageLayout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { TourPage } from "./pages/TourPage";
import { AdminPanel } from "./pages/AdminPanel";

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
            <Route path="/:id" element={<TourPage />}></Route>
          </Route>
          <Route path="/admin-panel" element={<AdminPanel />}></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
