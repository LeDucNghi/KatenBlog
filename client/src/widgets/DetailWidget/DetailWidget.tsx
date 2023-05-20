import "./DetailWidget.scss";

import * as React from "react";

import { Icons } from "../../components/Common/Icons/Icons";
import { Post } from "../../models";
import moment from "moment";

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
      <div
        className={
          size === "small"
            ? "detail_widget_thumbnail"
            : "detail_widget_thumbnail small"
        }
        style={style}
      >
        <p className="thumbnail_items thumbnail_categories">
          {items?.categories}
        </p>

        <h2 className="thumbnail_items thumbnail_title post_title">
          {items?.title}
        </h2>

        <ul className="thumbnail_items thumbnail_meta_list meta_list">
          <li>{items?.user?.fullname} </li>
          <li>{moment(items?.createdAt).format("LL")} </li>
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
        <div className="detail_post_title post_title">{items?.title}</div>

        <div className="detail_createdAt">
          {moment(items?.createdAt).format("LL")}
        </div>
      </div>
    );
  else if (direction === "vertical" && !isThumbedNail)
    return (
      <div className="detail_widget">
        <ul className="detail_meta_list meta_list widget_items">
          <li>
            <div className="meta_author">
              <img src={items?.user?.avatar} alt="" />
            </div>
            {items?.user?.fullname}{" "}
          </li>
          <li>{moment(items?.createdAt).format("LL")} </li>
        </ul>

        <div className="detail_content widget_items">
          <h3 className="detail_title post_title">{items?.title}</h3>

          <div className="detail_subtitle">{items?.subTitle}</div>
        </div>
      </div>
    );
  else if (direction === "horizontal" && size === "big")
    return (
      <div className="detail_widget_big">
        <ul className="meta_list widget_items">
          <li>
            <div className="meta_author">
              <img src={items?.user?.avatar} alt="" />
            </div>
            {items?.user?.fullname}{" "}
          </li>
          <li>{items?.categories}</li>
          <li>{moment(items?.createdAt).format("LL")}</li>
        </ul>

        <div className="detail_content widget_items">
          <h3 className="detail_title post_title">{items?.title}</h3>

          <div className="detail_subtitle post_subtitle">{items?.subTitle}</div>
        </div>

        <div className="detail_share_buttons widget_items">
          <button>{<Icons iconName="share" />}</button>
          <button>{<Icons iconName="option" />}</button>
        </div>
      </div>
    );

  return null;
}
