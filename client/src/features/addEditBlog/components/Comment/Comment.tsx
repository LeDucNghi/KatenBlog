import "./Comment.scss";

import * as React from "react";

import { Button, TextField, Typography } from "@mui/material";

import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";
import { handlePostComment } from "../../addEditThunk";
import { useAppDispatch } from "../../../../app/hooks";

export interface ICommentProps {
  id: string;
}

export function Comment({ id }: ICommentProps) {
  const dispatch = useAppDispatch();

  const [comment, setComment] = React.useState("");

  const handlePostNewComment = () => {
    dispatch(handlePostComment(id, comment));

    setComment("");
  };

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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Typography className="comment_warn">
        Please note, comments must be approved before they are published
      </Typography>

      <Button
        onClick={handlePostNewComment}
        className="comment_button"
        variant="contained"
      >
        WRITE A COMMENT
      </Button>
    </RoundedWidget>
  );
}
