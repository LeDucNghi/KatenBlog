import "./Comment.scss";

import * as React from "react";

import { Button, TextField, Typography } from "@mui/material";
import { fetchCommentListSuccess, selectCommentList } from "../../addEditSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import { handlePostComment } from "../../addEditThunk";

export interface ICommentProps {
  id: string;
}

export function Comment({ id }: ICommentProps) {
  const dispatch = useAppDispatch();

  // const commentList = useAppSelector(selectCommentList)

  const [comment, setComment] = React.useState("");

  // const handlePostComment = () => {
  //   commentList.push()

  //   dispatch(fetchCommentListSuccess())
  // }

  return (
    <RoundedWidget
      title="Leave Comment"
      style={{
        width: "100%",
      }}
      isDivider
      anchorTitle="left"
    >
      <TextField
        id="standard-multiline-static"
        label="Your comment"
        multiline
        rows={4}
        className="comment_field"
        variant="outlined"
        onChange={(e) => setComment(e.target.value)}
      />

      <Typography className="comment_warn">
        Please note, comments must be approved before they are published
      </Typography>

      <Button
        onClick={() => dispatch(handlePostComment(id, comment))}
        className="comment_button"
        variant="contained"
      >
        WRITE A COMMENT
      </Button>
    </RoundedWidget>
  );
}
