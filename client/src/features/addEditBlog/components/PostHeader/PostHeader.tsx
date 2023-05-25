import "./PostHeader.scss";

import * as React from "react";

import { Post } from "../../../../models";
import moment from "moment";

export interface IPostHeaderProps {
  blogData: Post | null | undefined;
}

export function PostHeader({ blogData }: IPostHeaderProps) {
  return (
    <div className="post_header">
      <h1 className="post_title">{blogData?.title}</h1>

      <ul className="meta_list">
        <li>
          <div className="meta_author">
            <img src={blogData?.user?.avatar} alt="" />
          </div>
          <span className="meta_author_name">{blogData?.user?.fullname} </span>
        </li>
        <li>{blogData?.categories} </li>

        <li>{moment(blogData?.createdAt).format("LL")} </li>
      </ul>
    </div>
  );
}
