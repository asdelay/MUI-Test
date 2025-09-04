import { Box, Grid, Paper, Rating, Typography, Link } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { FC } from "react";
import type { Tour } from "@/modules/TourModule/types";
import { Link as RouterLink } from "react-router";

interface TourCardProps {
  tour: Tour;
}

const TourCard: FC<TourCardProps> = ({ tour }) => {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <Link component={RouterLink} to={`/${tour.id}`} underline="none">
        <Paper elevation={3} sx={{ overflow: "clip" }}>
          <Box
            component="img"
            alt={tour.name}
            src={tour.image}
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
                {tour.duration} hour{tour.duration !== 1 && "s"}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}
            >
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
                ({tour.numberOfReviews} rewiev
                {tour.numberOfReviews !== 1 && "s"})
              </Typography>
            </Box>
            <Typography variant="h6" component="h3">
              From €{tour.price}
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default TourCard;
