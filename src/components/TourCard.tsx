import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TourCard = () => {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <Paper elevation={3} sx={{ overflow: "clip" }}>
        <img
          alt="Dubrovnik"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/250px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg"
        />
        <Box sx={{ px: 1 }}>
          <Typography component="h2" variant="subtitle1">
            Dubrovnik
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon sx={{ width: 15, mr: 0.5 }} />
            <Typography variant="body2" component="p">
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Rating
              name="half-rating-read"
              defaultValue={4.0}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography variant="caption" component="p">
              4.0
            </Typography>
            <Typography variant="caption" component="p">
              (462 rewievs)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
