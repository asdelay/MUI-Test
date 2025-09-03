import Grid from "@mui/material/Grid";
import TourCard from "./TourCard";
import type { Tour } from "@/modules/TourModule/types";

const TourList = ({ tours }: { tours: Tour[] }) => {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ my: 1, alignItems: "center" }}
    >
      {tours &&
        tours.length != 0 &&
        tours?.map((cityTour) => (
          <TourCard key={cityTour.id} tour={cityTour} />
        ))}
    </Grid>
  );
};

export default TourList;
