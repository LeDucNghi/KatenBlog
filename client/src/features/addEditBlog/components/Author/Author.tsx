import "./Author.scss";

import { Profile, UserType } from "../../../../models";

import { BREAK_POINTS_NUMBER } from "../../../../constants";
import { IconsListWidget } from "../../../../widgets/ListWidget/IconsListWidget";
import Paper from "@mui/material/Paper";
import { selectUserProfile } from "../../../auth/authSlice";
import { useAppSelector } from "../../../../app/hooks";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export interface IAuthorProps {
  userType: UserType | null | undefined;
  author: Profile | undefined;
}

export function Author({ author, userType }: IAuthorProps) {
  const { windowInnerWidth } = useWindowSize();
  const userProfile = useAppSelector(selectUserProfile);

  return (
    <Paper elevation={8} className="author_container">
      <div className="author_avatar author_item">
        <img
          src={userType === "isAdd" ? userProfile?.avatar : author?.avatar}
          alt=""
        />
      </div>

      <div className="author_info author_item">
        <h2 className="author_name">
          {userType === "isAdd" ? userProfile?.fullname : author?.fullname}{" "}
        </h2>
        <p className="author_description">
          {userType === "isAdd" && userProfile?.description
            ? userProfile?.description
            : author?.description
            ? author?.description
            : "Hello, I’m a content writer who is fascinated by content fashion,celebrity and lifestyle. She helps clients bring the right content to the right people."}
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
