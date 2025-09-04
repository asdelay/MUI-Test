import type { Tour } from "@/modules/TourModule";
import { type RootState } from "@/store/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ImageCollage from "./ImageCollage";
import CustomAccordion from "./Accordion";
import BottomBooking from "./BottomBooking";
import { useTranslation } from "react-i18next";

export const TourPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const tour: Tour | null = useSelector((state: RootState) => {
    const numericId = Number(id);

    for (const cityTour of state.tour.tours) {
      const found = cityTour.tours.find((t) => t.id === numericId);
      if (found) return found;
    }
    return null;
  });
  if (!tour)
    return (
      <Box>
        <Typography>{t("no-info")}</Typography>
      </Box>
    );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: 3,
      }}
    >
      <Typography variant="h3">{tour.name}</Typography>
      <ImageCollage mainImage={tour.image} collageData={tour.collageData} />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">{t("about-this-tour")}</Typography>
        <Typography variant="body1" component="p" sx={{ mt: 1 }}>
          {tour.description}
        </Typography>
      </Box>

      <Box sx={{ my: 10 }}>
        <Typography variant="h6">{t("faq")}</Typography>
        <CustomAccordion />
      </Box>
      <BottomBooking />
    </Box>
  );
};
