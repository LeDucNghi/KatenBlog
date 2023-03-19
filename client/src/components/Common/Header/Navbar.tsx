import { Box, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export interface INavbarProps {
  width: number;
  open: boolean;
  setOpen: any;
}

export function Navbar({ width, setOpen, open }: INavbarProps) {
  return (
    <Box className="header_above">
      <Button
        component={RouterLink}
        to="/signin"
        className="header_button"
        startIcon={<PersonIcon className="header_icon_button" />}
      >
        Sign In
      </Button>

      <Typography
        component={RouterLink}
        to="/home"
        className="header_brand_name"
        variant="h4"
      >
        Zyro
      </Typography>

      <Button
        className="header_button"
        startIcon={<SearchIcon className="header_icon_button" />}
      >
        Search
      </Button>

      {width <= 320 && (
        <IconButton component="label" onClick={() => setOpen(!open)}>
          <MenuIcon className="header_menu" />
        </IconButton>
      )}
    </Box>
  );
}
