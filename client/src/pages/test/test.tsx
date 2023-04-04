import "./test.scss";

import * as React from "react";

import { ListItemButton, Paper } from "@mui/material";

import { highestList } from "../../mock";

export interface ITestProps {
  // horizontal : ngang
  // vertical : đứng
  direction: "horizontal" | "vertical";
}

export function Test({ direction }: ITestProps) {
  return (
    <>
      {highestList.slice(0, 3).map((items, key) => {
        return (
          <Paper
            elevation={8}
            key={key}
            className={`${
              direction === "vertical"
                ? "category_items vertical"
                : "category_items horizontal"
            }`}
          >
            <ListItemButton>
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
      })}
    </>
  );
}
