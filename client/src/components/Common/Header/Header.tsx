import "./Header.scss";

import { logout, selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import { CustomDrawer } from "../Drawer/Drawer";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlightIcon from "@mui/icons-material/Flight";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Navbar } from "./Navbar";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SearchIcon from "@mui/icons-material/Search";
import { getUserProfile } from "../../../features/auth/authThunk";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  const token = JSON.parse(localStorage.getItem("token")!);

  var [width, setWidth] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      dispatch(logout());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (width === 0) setWidth(window.innerWidth);
    else {
      window.addEventListener("resize", updateWindowDimensions);

      return () => window.removeEventListener("resize", updateWindowDimensions);
    }
  }, [width]);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(getUserProfile());
  }, [dispatch, isLoggedIn]);

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    width = newWidth;
    setWidth(width);
  };

  if (pathname === "/signin") return <></>;
  if (pathname === "/signup") return <></>;

  return (
    <Box className="header_container">
      <Navbar width={width} setOpen={setOpen} open={open} />
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
