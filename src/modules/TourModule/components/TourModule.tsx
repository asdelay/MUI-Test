import TourCard from "@/modules/TourModule/components/TourCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export const TourModule = () => {
  const tours = useSelector((state: RootState) => state.tour.tours);
  return (
    <>
      <Typography variant="h3" sx={{ mt: 2 }}>
        Tours
      </Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{ my: 1, alignItems: "center" }}
      >
        {tours &&
          tours.length != 0 &&
          tours.map((tour) => <TourCard key={tour.name} tour={tour} />)}
      </Grid>
    </>
  );
};
