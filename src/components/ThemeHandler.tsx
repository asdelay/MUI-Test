import { Box, Button, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ThemeHandler = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {mode === "dark" ? (
        <Button onClick={() => setMode("light")}>
          {<LightModeIcon color="action" />}
        </Button>
      ) : (
        <Button onClick={() => setMode("dark")}>
          {<DarkModeIcon color="action" />}
        </Button>
      )}
    </Box>
  );
};

export default ThemeHandler;
