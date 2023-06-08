import "./CategoriesBanner.scss";

import * as React from "react";

import { Breadcrumbs, Link } from "@mui/material";

export interface ICategoriesBannerProps {
  categoriesName: string;
  route?: string;
}

export function CategoriesBanner({
  categoriesName,
  route,
}: ICategoriesBannerProps) {
  return (
    <div className="categories_banner_wrapper">
      <h1 className="categories_title">{categoriesName}</h1>

      <Breadcrumbs className="categories_breadcrumb" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href={route}>
          {categoriesName}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
