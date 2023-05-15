import "./DetailWidget.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";
import { Post } from "../../models";

export interface IDetailWidgetProps {
  isThumbedNail?: boolean;
  style?: React.CSSProperties;
  items: Post;
  direction?: "horizontal" | "vertical";
  size?: "small" | "big";
  shape?: "circle" | "square";
}

export function DetailWidget({
  isThumbedNail,
  style,
  items,
  direction,
  size,
  shape,
}: IDetailWidgetProps) {
  if (isThumbedNail)
    return (
      <div className="detail_widget_thumbnail" style={style}>
        <p className="thumbnail_items thumbnail_categories">
          {items.categories}
        </p>

        <h2 className="thumbnail_items thumbnail_title post_title">
          {items.title}
        </h2>

        <ul className="thumbnail_items thumbnail_meta_list meta_list">
          <li>{items.user?.fullname} </li>
          <li>{items.createdAt} </li>
        </ul>
      </div>
    );
  else if (direction === "horizontal" && !size)
    return (
      <div
        className={
          shape === "square"
            ? "detail_widget_normal square"
            : "detail_widget_normal"
        }
      >
        <div className="detail_post_title post_title">{items.title}</div>

        <div className="detail_createdAt">{items.createdAt}</div>
      </div>
    );
  else if (direction === "vertical" && !isThumbedNail)
    return (
      <div className="detail_widget">
        {/* <div className="detail_badge ">
          <a href="/" className="detail_categories">
            {items.categories}
          </a>

          <div className="detail_post_format">
            <Icons iconName="image" />
          </div>
        </div> */}

        <ul className="detail_meta_list meta_list widget_items">
          <li>
            <div className="meta_author">
              <img src={items.user?.avatar} alt="" />
            </div>
            {items.user?.fullname}{" "}
          </li>
          <li>{items.createdAt} </li>
        </ul>

        <div className="detail_content widget_items">
          <h3 className="detail_title post_title">{items.title}</h3>

          <div className="detail_subtitle">{items.subTitle}</div>
        </div>
      </div>
    );

  return null;
}
