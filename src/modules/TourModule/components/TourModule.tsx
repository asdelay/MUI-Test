import TourCard from "@/components/TourCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const TourModule = () => {
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
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </Grid>
    </>
  );
};
