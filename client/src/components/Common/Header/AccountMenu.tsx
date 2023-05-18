import { AccountMenuProps } from "../../../models";
import { CustomIcons } from "../Icons/CustomIcons";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export interface IAccountMenuProps {
  open: boolean;
  close: any;
  listItems: AccountMenuProps[];
}

export default function AccountMenu({
  open,
  close,
  listItems,
}: IAccountMenuProps) {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Menu
      // anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={close}
      onClick={close}
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
      {listItems.map((items, key) => {
        return (
          <MenuItem key={key} onClick={close}>
            <ListItemIcon>
              <CustomIcons icon={items.icon} />
            </ListItemIcon>
            {items.name}
          </MenuItem>
        );
      })}

      {/* <MenuItem onClick={close}>
        <Avatar /> Profile
      </MenuItem>
      <Divider />
      <MenuItem onClick={close}>
        <ListItemIcon>
          <LibraryBooksIcon fontSize="small" />
        </ListItemIcon>
        Your Blog
      </MenuItem>
      <MenuItem onClick={close}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={close}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem> */}
    </Menu>
  );
}
