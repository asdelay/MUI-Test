import { TourModule } from "@/modules/TourModule";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Typography variant="h1">{t("welcome")}</Typography>
        <TourModule />
      </Box>
    </>
  );
};
