import "./Comment.scss";

import * as React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import commentApi from "../../../../api/commentApi";
import { handlePostComment } from "../../addEditThunk";
import { useAppDispatch } from "../../../../app/hooks";

export interface ICommentProps {
  id: string;
}

export function Comment({ id }: ICommentProps) {
  const dispatch = useAppDispatch();

  const [comment, setComment] = React.useState("");

  return (
    <Box className="comment_container">
      <Typography className="comment_title">Leave a comment</Typography>

      <TextField
        id="standard-multiline-static"
        label="Your comment"
        multiline
        rows={4}
        className="comment_field"
        variant="standard"
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
    </Box>
  );
}
