import type { Tour } from "@/modules/TourModule";
import { type RootState } from "@/store/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const TourPage = () => {
  const { id } = useParams();
  const tour: Tour | null = useSelector((state: RootState) => {
    const numericId = Number(id);
    // first find the city, then find the tour in it
    for (const cityTour of state.tour.tours) {
      const found = cityTour.tours.find((t) => t.id === numericId);
      if (found) return found;
    }
    return null;
  });
  if (!tour)
    return (
      <Box>
        <Typography>No information found about this tour. Sorry</Typography>
      </Box>
    );
  return <div>TourPage {tour.name}</div>;
};
