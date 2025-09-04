import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const CustomAccordion = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Accordion sx={{ mt: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{t("faq-1-question")}</Typography>
        </AccordionSummary>
        <AccordionDetails>{t("faq-1-answer")}</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">{t("faq-2-question")}</Typography>
        </AccordionSummary>
        <AccordionDetails>{t("faq-2-answer")}</AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">{t("faq-3-question")}</Typography>
        </AccordionSummary>
        <AccordionDetails>{t("faq-3-answer")}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
