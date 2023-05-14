import "./DetailClearFix.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";
import { Post } from "../../models";

export interface IDetailClearFixProps {
  isThumbedNail?: boolean;
  style?: React.CSSProperties;
  items: Post;
  direction?: "horizontal" | "vertical";
  size?: "small" | "big";
}

export function DetailClearFix({
  isThumbedNail,
  style,
  items,
  direction,
  size,
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
  else if (direction === "horizontal" && !size)
    return (
      <div className="detail_clearfix">
        <div className="detail_post_title">{items.title}</div>

        <div className="detail_createdAt">{items.createdAt}</div>
      </div>
    );
  else if (direction === "vertical" && !isThumbedNail)
    return (
      <div className="detail_clearfix">
        <div className="detail_post_title">{items.title}</div>

        <div className="detail_createdAt">{items.createdAt}</div>
      </div>
    );

  return null;
}
