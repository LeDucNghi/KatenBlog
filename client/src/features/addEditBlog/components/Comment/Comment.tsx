import "./Comment.scss";

import * as React from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

import commentApi from "../../../../api/commentApi";

export interface ICommentProps {
  id: string;
}

export function Comment({ id }: ICommentProps) {
  const [comment, setComment] = React.useState("");

  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = comment;

    try {
      const res = await commentApi.comment({ id, content });
      console.log("🚀 ~ file: Comment.tsx:20 ~ handlePostComment ~ res", res);
    } catch (error) {
      console.log(
        "🚀 ~ file: Comment.tsx:22 ~ handlePostComment ~ error",
        error
      );
    }
  };

  const handleGetPostComment = async () => {
    try {
      const res = await commentApi.getComment(id);
      console.log(
        "🚀 ~ file: Comment.tsx:33 ~ handleGetPostComment ~ res",
        res
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: Comment.tsx:35 ~ handleGetPostComment ~ error",
        error
      );
    }
  };
  return (
    <Box className="comment_container">
      <Typography className="comment_title">Leave a comment</Typography>

      <TextField
        id="standard-multiline-static"
        label="Your comment"
        multiline
        rows={4}
        // defaultValue="Default Value"
        className="comment_field"
        variant="standard"
      />

      <Typography className="comment_warn">
        Please note, comments must be approved before they are published
      </Typography>

      <Button className="comment_button" variant="contained">
        WRITE A COMMENT
      </Button>
    </Box>
  );
}
