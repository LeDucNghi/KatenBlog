import * as React from "react";

import { Comment } from "../../features/addEditBlog/components/Comment";
import { useParams } from "react-router-dom";

export interface IBlogDetailProps {}

export function BlogDetail(props: IBlogDetailProps) {
  const { id } = useParams<string>();
  console.log("🚀 ~ file: BlogDetail.tsx:8 ~ BlogDetail ~ id", id);
  return (
    <div>
      Blog detail
      <Comment id={`${id}`} />
    </div>
  );
}
