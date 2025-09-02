import {
  Box,
  Button,
  Container,
  Typography,
  useColorScheme,
} from "@mui/material";

function App() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    console.log(`mode is ${mode}`);
    return null;
  }
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <Typography variant="h1">Hello, world!</Typography>

        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          {mode === "dark" ? (
            <Button variant="contained" onClick={() => setMode("light")}>
              Light theme
            </Button>
          ) : (
            <Button variant="outlined" onClick={() => setMode("dark")}>
              Dark theme
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
}

export default App;
