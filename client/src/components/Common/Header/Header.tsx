import "./Header.scss";

import { Box, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import { CustomDrawer } from "../Drawer/Drawer";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();

  var [width, setWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (width === 0) setWidth(window.innerWidth);
    else {
      window.addEventListener("resize", updateWindowDimensions);

      return () => window.removeEventListener("resize", updateWindowDimensions);
    }
  }, [width]);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    width = newWidth;
    setWidth(width);
  };

  if (pathname === "/signin") return <></>;
  if (pathname === "/signup") return <></>;
  // if (pathname === "/edit") return <></>;

  return (
    <Box className="header_container">
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

      {width >= 1024 && (
        <Box className="header_below">
          {navbarList.map((items, key) => {
            return (
              <Button
                key={key}
                className="header_button"
                startIcon={items.icon}
              >
                {items.name}
              </Button>
            );
          })}
        </Box>
      )}

      {width <= 320 && (
        <CustomDrawer anchor="right" open={open} close={() => setOpen(!open)}>
          <Demo>
            <List dense={false}>
              {navbarList.map((items, key) => {
                return (
                  <ListItem key={key}>
                    <ListItemIcon>{items.icon}</ListItemIcon>
                    <ListItemText primary={items.name} />
                  </ListItem>
                );
              })}
            </List>
          </Demo>
        </CustomDrawer>
      )}
    </Box>
  );
}

const navbarList = [
  {
    id: 1,
    name: "Food & Drinks",
    icon: <FastfoodIcon />,
  },
  {
    id: 2,
    name: "Categories",
    icon: <CategoryIcon />,
  },
  {
    id: 3,
    name: "Travel",
    icon: <FlightIcon />,
  },
  {
    id: 4,
    name: "Elements",
    icon: <SearchIcon />,
  },
  {
    id: 5,
    name: "About",
    icon: <InfoIcon />,
  },
  {
    id: 6,
    name: "Contact us",
    icon: <PermContactCalendarIcon />,
  },
];

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
