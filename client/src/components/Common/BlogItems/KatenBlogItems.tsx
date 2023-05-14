import "./KatenBlogItems.scss";

import * as React from "react";

import { Badge, ListItemButton, Paper } from "@mui/material";

import { DetailClearFix } from "../../../widgets/DetailClearFix/DetailClearFix";
import { Icons } from "../Icons/Icons";
import { Post } from "../../../models";

export interface IKatenBlogItemsProps {
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
}

export function KatenBlogItems({
  direction,
  shape,
  items,
  size,
  isThumbedNail,
  fontSize,
  style,
  showBadge,
}: IKatenBlogItemsProps) {
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
      >
        <div
          className={`${
            direction === "horizontal" && shape === "circle"
              ? "items_img circle"
              : "items_img square"
          }`}
        >
          {!isThumbedNail && (
            <>
              <p className="items_categories">{items.categories}</p>

              <span>
                <Icons iconName="image" />
              </span>

              <p className="items_categories">{items.categories}</p>
            </>
          )}

          <img src={items.image as string} alt="" />

          {direction === "vertical" && isThumbedNail && (
            <DetailClearFix items={items} isThumbedNail={isThumbedNail} />
          )}
        </div>

        {!isThumbedNail && (
          <DetailClearFix
            items={items}
            isThumbedNail={isThumbedNail}
            direction="horizontal"
          />
        )}
      </ListItemButton>
    </Paper>
  );
}
