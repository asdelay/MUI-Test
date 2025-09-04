import { Menu, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";

const LanguageHandler = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { i18n } = useTranslation();
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TranslateIcon color="action" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("en");
            setAnchorEl(null);
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            i18n.changeLanguage("nl");
            setAnchorEl(null);
          }}
        >
          Nederlands
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageHandler;
