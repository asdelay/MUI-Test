import TourCard from "@/modules/TourModule/components/TourCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export const TourModule = () => {
  const tours = useSelector((state: RootState) => state.tour.tours);
  return (
    <>
      {tours.map((tour) => (
        <div>
          <Typography variant="h3" sx={{ mt: 2 }}>
            {tour.name}
          </Typography>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ my: 1, alignItems: "center" }}
          >
            {tour.tours &&
              tour.tours.length != 0 &&
              tour.tours.map((cityTour) => (
                <TourCard key={cityTour.id} tour={cityTour} />
              ))}
          </Grid>
        </div>
      ))}
    </>
  );
};
