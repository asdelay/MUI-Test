import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageHandler = () => {
  const { i18n } = useTranslation();
  return (
    <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
      <Button variant="contained" onClick={() => i18n.changeLanguage("en")}>
        English
      </Button>

      <Button variant="outlined" onClick={() => i18n.changeLanguage("nl")}>
        Nederlands
      </Button>
    </Box>
  );
};

export default LanguageHandler;
