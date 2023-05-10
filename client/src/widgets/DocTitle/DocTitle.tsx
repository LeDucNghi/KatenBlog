import * as React from "react";

import { Box } from "@mui/material";

export interface IDocTitleProps {
  title: string;
  children: React.ReactNode;
}

export function DocTitle({ title, children }: IDocTitleProps) {
  React.useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return <Box>{children}</Box>;
}
