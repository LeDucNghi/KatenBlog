import { Avatar, Box } from "@mui/material";

import { Icons } from "../Icons/Icons";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { accountMenuWidget } from "../../../constants";
import { selectUserProfile } from "../../../features/auth/authSlice";
import { useAppSelector } from "../../../app/hooks";
import { useNavigate } from "react-router-dom";

export interface IAccountMenuProps {}

export default function AccountMenu(props: IAccountMenuProps) {
  const navigate = useNavigate();
  const userProfile = useAppSelector(selectUserProfile);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event?: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event!.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemsClick = (items: {
    id: number;
    name: string;
    route: string;
    icon: string;
  }) => {
    handleClose();
    navigate(items.route);

    if (items.name === "Logout") {
      localStorage.removeItem("token");

      handleClose();

      window.location.href = `/`;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
        onClick={handleClick}
      >
        {userProfile?.avatar ? (
          <Avatar sx={{ width: 32, height: 32 }} src={userProfile?.avatar} />
        ) : (
          <Avatar sx={{ width: 32, height: 32 }}>
            {userProfile?.fullname?.charAt(0)}
          </Avatar>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {accountMenuWidget(userProfile?.id!).map((items, key) => {
          return (
            <MenuItem key={key} onClick={() => menuItemsClick(items)}>
              <ListItemIcon>
                <Icons iconName={items.icon} />
              </ListItemIcon>
              {items.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
