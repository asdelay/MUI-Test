import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import TourList from "./TourList";
import Box from "@mui/material/Box";

export const TourModule = () => {
  const tours = useSelector((state: RootState) => state.tour.tours);
  return (
    <>
      {tours.map((tour) => (
        <Box key={tour.id}>
          <Typography variant="h3" sx={{ mt: 2 }}>
            {tour.name}
          </Typography>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ my: 1, alignItems: "center" }}
          >
            <TourList tours={tour.tours} />
          </Grid>
        </Box>
      ))}
    </>
  );
};
