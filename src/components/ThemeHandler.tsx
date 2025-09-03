import { Box, Button, useColorScheme } from "@mui/material";
import { useTranslation } from "react-i18next";
const ThemeHandler = () => {
  const { mode, setMode } = useColorScheme();
  const { t } = useTranslation();
  return (
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
  );
};

export default ThemeHandler;
