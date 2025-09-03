import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { FC } from "react";
import type { Tour } from "@/modules/TourModule/types";

interface TourCardProps {
  tour: Tour;
}

const TourCard: FC<TourCardProps> = ({ tour }) => {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <Paper elevation={3} sx={{ overflow: "clip" }}>
        <Box
          component="img"
          alt={tour.name}
          src={tour.imageSource}
          sx={{
            width: "100%",
            height: "100px",
            display: "block",
            objectFit: "cover",
          }}
        />
        <Box sx={{ p: 1 }}>
          <Typography component="h2" variant="subtitle1">
            {tour.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ width: 15, mr: 0.5 }} />
            <Typography variant="body2" component="p">
              {tour.lengthInHours} hour{tour.lengthInHours !== 1 && "s"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
            <Rating
              name="half-rating-read"
              defaultValue={tour.rating}
              precision={0.1}
              size="small"
              readOnly
            />
            <Typography variant="body2" component="p">
              {tour.rating}
            </Typography>
            <Typography variant="caption" component="p">
              ({tour.reviews} rewiev{tour.reviews !== 1 && "s"})
            </Typography>
          </Box>
          <Typography variant="h6" component="h3">
            From €{tour.startingPrice}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
