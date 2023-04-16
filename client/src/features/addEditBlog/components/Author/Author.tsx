import "./Author.scss";

import * as React from "react";

import { Icons } from "../../../../components/Common/Icons/Icons";
import Paper from "@mui/material/Paper";
import { Profile } from "../../../../models";

export interface IAuthorProps {
  author: Profile | undefined;
}

export function Author({ author }: IAuthorProps) {
  return (
    <Paper elevation={8} className="author_container">
      <div className="author_avatar">
        <img src={author?.avatar} alt="" />
      </div>

      <div className="author_info">
        <h2 className="author_name">{author?.fullname} </h2>
        <p className="author_description">
          Hello, I’m a content writer who is fascinated by content fashion,
          celebrity and lifestyle. She helps clients bring the right content to
          the right people.
        </p>
        <div className="author_contact_social">
          <a
            href="https://www.facebook.com/nghile.genji/"
            target="_blank"
            rel="noreferrer noopener"
            className="social_items"
          >
            <Icons iconName="facebook" />
          </a>
          <a
            href="https://github.com/LeDucNghi"
            target="_blank"
            rel="noreferrer noopener"
            className="social_items"
          >
            <Icons iconName="twitter" />
          </a>
          <a
            href="https://www.instagram.com/dnn___2812/"
            target="_blank"
            rel="noreferrer noopener"
            className="social_items"
          >
            <Icons iconName="instagram" />
          </a>
          <a
            href="https://github.com/LeDucNghi"
            target="_blank"
            rel="noreferrer noopener"
            className="social_items"
          >
            <Icons iconName="github" />
          </a>
        </div>
      </div>
    </Paper>
  );
}
