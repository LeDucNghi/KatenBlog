import { Box, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { ProfileMenu } from "./ProfileDropdown";
import SearchIcon from "@mui/icons-material/Search";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useWindowSize } from "../../../custom-hook/useWindowSize";

export interface INavbarProps {
  open: boolean;
  setOpen: any;
}

export function Navbar({ setOpen, open }: INavbarProps) {
  const navigate = useNavigate();
  const { windowInnerWidth } = useWindowSize();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Box className="header_above">
      <Button
        className="header_button"
        startIcon={<SearchIcon className="header_icon_button" />}
        onClick={() => navigate(`/search`)}
      >
        Search
      </Button>

      <Typography
        component={RouterLink}
        to="/home"
        className="header_brand_name"
        variant="h4"
      >
        Zyro
      </Typography>

      {isLoggedIn ? (
        <ProfileMenu />
      ) : (
        <Button
          component={RouterLink}
          to="/signin"
          className="header_button"
          startIcon={<PersonIcon className="header_icon_button" />}
        >
          Sign In
        </Button>
      )}

      {windowInnerWidth <= 320 && (
        <IconButton component="label" onClick={() => setOpen(!open)}>
          <MenuIcon className="header_menu" />
        </IconButton>
      )}
    </Box>
  );
}
