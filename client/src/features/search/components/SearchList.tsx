import "../../../pages/Search/Search.scss";

import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Paper from "@mui/material/Paper";
import { highestList } from "../../../mock";

export interface ISearchListProps {}

export function SearchList(props: ISearchListProps) {
  return (
    <div className="search_body">
      <p className="search_list_count">{highestList.length} Results</p>
      <List className="search_list_content">
        {highestList.slice(0, 4).map((items, key) => {
          return (
            <Paper elevation={8} key={key} className="search_list_items">
              <ListItemButton>
                <div className="items_img">
                  <img src={items.img} alt="" />
                </div>

                <div className="items_text">
                  <p className="items_categories">{items.categories} </p>
                  <h2 className="items_title">{items.title}</h2>
                  <p className="items_time">{items.time} </p>
                  <p className="items_subtitle">{items.subtitle}</p>
                </div>
              </ListItemButton>
            </Paper>
          );
        })}
      </List>
    </div>
  );
}
