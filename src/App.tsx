import {
  Box,
  Button,
  Container,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function App() {
  const { mode, setMode } = useColorScheme();
  const { t, i18n } = useTranslation();
  if (!mode) {
    console.log(`mode is ${mode}`);
    return null;
  }
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <Typography variant="h1">{t("welcome")}</Typography>

        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          {mode === "dark" ? (
            <Button variant="contained" onClick={() => setMode("light")}>
              {t("lightTheme")}
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setMode("dark")}>
              {t("darkTheme")}
            </Button>
          )}
        </Box>

        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={() => i18n.changeLanguage("en")}>
            English
          </Button>

          <Button variant="outlined" onClick={() => i18n.changeLanguage("nl")}>
            Nederlands
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
