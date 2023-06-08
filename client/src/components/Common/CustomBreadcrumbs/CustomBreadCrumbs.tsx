import * as React from "react";

import { Breadcrumbs, Link } from "@mui/material";

export interface ICustomBreadcrumbsProps {
  isAddLink?: boolean;
}

export function CustomBreadcrumbs({ isAddLink }: ICustomBreadcrumbsProps) {
  return (
    <Breadcrumbs className="post_breadcrumb" aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link
        underline="hover"
        color="inherit"
        // href={`/categories/${blogData?.categories}`}
      >
        {/* {blogData?.categories} */}
      </Link>
      <Link
        underline="hover"
        color="text.primary"
        href="/material-ui/react-breadcrumbs/"
        aria-current="page"
      >
        {/* {blogData?.title} */}
      </Link>
    </Breadcrumbs>
  );
}
