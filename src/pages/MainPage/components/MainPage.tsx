import LanguageHandler from "@/components/LanguageHandler";
import ThemeHandler from "@/components/ThemeHandler";
import { TourModule } from "@/modules/TourModule";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h1">{t("welcome")}</Typography>
      <ThemeHandler />
      <LanguageHandler />
      <TourModule />
    </>
  );
};
