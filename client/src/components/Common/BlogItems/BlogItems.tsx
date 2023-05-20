import "./BlogItems.scss";

import * as React from "react";

import { ListItemButton, Paper } from "@mui/material";

import { DetailWidget } from "../../../widgets/DetailWidget/DetailWidget";
import { Icons } from "../Icons/Icons";
import { Images } from "../../../constants";
import { Post } from "../../../models";

export interface IBlogItemsProps {
  // horizontal : ngang
  // vertical : đứng
  direction: "horizontal" | "vertical";
  shape?: "circle" | "square";
  items: Post;
  size?: "small" | "big";
  style?: React.CSSProperties;
  isThumbedNail?: boolean;
  fontSize?: string;
  showBadge: boolean;
  onclick?: any;
}

export function BlogItems({
  direction,
  shape,
  items,
  size,
  isThumbedNail,
  fontSize,
  style,
  showBadge,
  onclick,
}: IBlogItemsProps) {
  return (
    <Paper
      elevation={8}
      className={`${
        direction === "vertical"
          ? "category_items vertical"
          : "category_items horizontal"
      }`}
      style={style}
    >
      <ListItemButton
        className={`${
          direction === "horizontal" && size === "big"
            ? "items_container large_horizontal"
            : "items_container"
        }`}
        style={{
          fontSize: fontSize,
        }}
        onClick={onclick}
      >
        <div
          className={`${
            direction === "horizontal" && shape === "circle"
              ? "items_img circle"
              : "items_img square"
          }`}
        >
          {direction === "vertical" && !size && !isThumbedNail && (
            <div className="detail_badge ">
              <a href="/" className="detail_categories">
                {items?.categories}
              </a>

              <div className="detail_post_format">
                <Icons iconName="image" className="post_format_icon" />
              </div>
            </div>
          )}

          {direction === "vertical" && !isThumbedNail && (
            <DetailWidget items={items} isThumbedNail={isThumbedNail} />
          )}

          <img src={items?.image as string} alt="" />

          {direction === "vertical" && isThumbedNail && (
            <>
              <div className="section_blur"></div>
              <DetailWidget items={items} isThumbedNail={isThumbedNail} />
            </>
          )}
        </div>

        {!isThumbedNail && (
          <DetailWidget
            items={items}
            isThumbedNail={isThumbedNail}
            direction={direction}
            size={size}
          />
        )}
      </ListItemButton>
    </Paper>
  );
}
