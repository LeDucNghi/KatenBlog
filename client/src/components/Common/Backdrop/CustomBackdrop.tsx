import "./CustomBackdrop.scss";

import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export interface ICustomBackdropProps {
  open: boolean;
  close: any;
  style?: React.CSSProperties;
}

export function CustomBackdrop({ open, close, style }: ICustomBackdropProps) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        ...style,
      }}
      open={open}
      onClick={close}
    >
      <CircularProgress color="error" />
    </Backdrop>
  );
}
