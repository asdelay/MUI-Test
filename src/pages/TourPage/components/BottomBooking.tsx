import {
  Paper,
  BottomNavigation,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const BottomBooking = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <Button onClick={handleOpen}>{t("booking-button")}</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {t("booking-title")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {t("booking-description")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="error" onClick={handleClose}>
              {t("booking-cancel")}
            </Button>
            <Button variant="contained" onClick={handleClose} autoFocus>
              {t("booking-confirm")}
            </Button>
          </DialogActions>
        </Dialog>
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBooking;
