import "./BlogItems.scss";

import { ListItemButton, Paper } from "@mui/material";

import { Post } from "../../../models";
import { useNavigate } from "react-router-dom";

export interface IBlogItemsProps {
  // horizontal : ngang
  // vertical : đứng
  direction: "horizontal" | "vertical";
  items: Post;
  route?: string;
}

export function BlogItems({ direction, items, route }: IBlogItemsProps) {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={8}
      className={`${
        direction === "vertical"
          ? "category_items vertical"
          : "category_items horizontal"
      }`}
    >
      <ListItemButton onClick={() => navigate(route!)}>
        <div className="items_img">
          <img src={items.image as string} alt="" />
        </div>

        <div className="items_text">
          <p className="items_categories">{items.categories} </p>
          <h2 className="items_title">{items.title}</h2>
          <p className="items_time">{items.createdAt} </p>
          <p className="items_subtitle">{items.subTitle}</p>
        </div>
      </ListItemButton>
    </Paper>
  );
}
