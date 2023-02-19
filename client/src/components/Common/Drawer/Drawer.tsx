import * as React from "react";

import Drawer from "@mui/material/Drawer";

export interface IDrawerProps {
  width?: number;
  anchor: "top" | "bottom" | "left" | "right";
  open: boolean;
  close: any;
  children: any;
}

export function CustomDrawer({
  width,
  anchor,
  open,
  close,
  children,
}: IDrawerProps) {
  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
      anchor={anchor}
      open={open}
      onClose={close}
    >
      {children}
    </Drawer>
  );
}
