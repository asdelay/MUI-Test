import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageHandler = () => {
  const { i18n } = useTranslation();
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="contained" onClick={() => i18n.changeLanguage("en")}>
        English
      </Button>
      <Button variant="contained" onClick={() => i18n.changeLanguage("nl")}>
        Nederlands
      </Button>
      TODO: add icon and popup
    </Box>
  );
};

export default LanguageHandler;
