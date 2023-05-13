import "./DetailClearFix.scss";

import * as React from "react";

import { Post } from "../../models";

export interface IDetailClearFixProps {
  isThumbedNail?: boolean;
  style?: React.CSSProperties;
  items: Post;
}

export function DetailClearFix({
  isThumbedNail,
  style,
  items,
}: IDetailClearFixProps) {
  if (isThumbedNail)
    return (
      <div className="detail_clearfix_thumbnail" style={style}>
        <p className="thumbnail_items thumbnail_categories">
          {items.categories}
        </p>

        <h2 className="thumbnail_items thumbnail_title">{items.title}</h2>

        <ul className="thumbnail_items thumbnail_meta_list">
          <li>{items.user?.fullname} </li>
          <li>{items.createdAt} </li>
        </ul>
      </div>
    );
  else
    return (
      <div className="detail_clearfix_normal" style={style}>
        <div className="categories_badge">{items.categories}</div>
      </div>
    );
}
