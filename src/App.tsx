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
    return null;
  }
  return (
    <>
      <Container sx={{ height: "100vh" }}>
        <Typography variant="h1">Hello, world!</Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              setMode("dark");
            }}
          >
            Dark theme
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              setMode("light");
            }}
          >
            Light theme
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
