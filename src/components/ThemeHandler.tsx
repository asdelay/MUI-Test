import { Box, Button, useColorScheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ThemeHandler = () => {
  const { mode, setMode } = useColorScheme();
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {mode === "dark" ? (
        <Button variant="contained" onClick={() => setMode("light")}>
          {<LightModeIcon />}
        </Button>
      ) : (
        <Button variant="contained" onClick={() => setMode("dark")}>
          {<DarkModeIcon />}
        </Button>
      )}
    </Box>
  );
};

export default ThemeHandler;
