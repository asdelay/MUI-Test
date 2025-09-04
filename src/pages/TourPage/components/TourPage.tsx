import type { Tour } from "@/modules/TourModule";
import { type RootState } from "@/store/store";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ImageCollage from "./ImageCollage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h3">{tour.name}</Typography>
      <ImageCollage mainImage={tour.image} collageData={tour.collageData} />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">About this tour</Typography>
        <Typography variant="body1" component="p" sx={{ mt: 1 }}>
          {tour.description}
        </Typography>
      </Box>

      <Box sx={{ my: 3 }}>
        <Typography variant="h5">Frequently Asked Questions</Typography>
        <Accordion sx={{ mt: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">Accordion Actions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
