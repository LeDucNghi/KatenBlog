import "./Author.scss";

import { BREAK_POINTS_NUMBER } from "../../../../constants";
import { IconsListWidget } from "../../../../widgets/ListWidget/IconsListWidget";
import Paper from "@mui/material/Paper";
import { Profile } from "../../../../models";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export interface IAuthorProps {
  author: Profile | undefined;
}

export function Author({ author }: IAuthorProps) {
  const { windowInnerWidth } = useWindowSize();
  return (
    <Paper elevation={8} className="author_container">
      <div className="author_avatar author_item">
        <img src={author?.avatar} alt="" />
      </div>

      <div className="author_info author_item">
        <h2 className="author_name">{author?.fullname} </h2>
        <p className="author_description">
          Hello, I’m a content writer who is fascinated by content fashion,
          celebrity and lifestyle. She helps clients bring the right content to
          the right people.
        </p>

        <div className="author_item">
          <IconsListWidget
            iconsSpace="0 0.3em"
            style={{
              margin: "1em 0",
              justifyContent:
                windowInnerWidth < BREAK_POINTS_NUMBER.md
                  ? "center"
                  : "flex-start",
              padding: 0,
              fontSize: windowInnerWidth > BREAK_POINTS_NUMBER.sm ? "10px" : "",
            }}
          />
        </div>
      </div>
    </Paper>
  );
}
