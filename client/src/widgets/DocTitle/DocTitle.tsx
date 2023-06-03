import * as React from "react";

import { Box } from "@mui/material";

export interface IPageProps {
  title: string;
  children: React.ReactNode;
}

export function Page({ title, children }: IPageProps) {
  React.useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return <Box>{children}</Box>;
}
