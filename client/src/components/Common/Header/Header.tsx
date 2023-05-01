import "./Header.scss";

import { useEffect, useState } from "react";

import { BREAK_POINTS_NUMBER } from "../../../constants/breakPoints";
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
import { handleGetAllPost } from "../../../features/addEditBlog/addEditThunk";
import { logout } from "../../../features/auth/authSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "../../../custom-hook/useWindowSize";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { pathname } = useLocation();

  const { windowInnerWidth } = useWindowSize();

  const dispatch = useAppDispatch();

  const token = JSON.parse(localStorage.getItem("token")!);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!token) {
      dispatch(logout());
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(handleGetAllPost());
  }, [dispatch]);

  if (pathname === "/signin") return <></>;
  if (pathname === "/signup") return <></>;
  if (pathname === "/profile/*") return <></>;

  return (
    <Box className="header_container">
      {/* NAVBAR */}
      <Navbar setOpen={setOpen} open={open} />

      {windowInnerWidth > BREAK_POINTS_NUMBER.md && (
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

      {windowInnerWidth <= BREAK_POINTS_NUMBER.xs && (
        <CustomDrawer anchor="right" open={open} close={() => setOpen(!open)}>
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
