import * as React from "react";

import { Button, TextField } from "@mui/material";

import commentApi from "../../../api/commentApi";

interface ICommentProps {
  id: string;
}

export function Comment({ id }: ICommentProps) {
  const [comment, setComment] = React.useState("");

  const handlePostComment = async (e: any) => {
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

  return (
    <form onSubmit={(e) => handlePostComment(e)}>
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button type="submit">Post</Button>
    </form>
  );
}
