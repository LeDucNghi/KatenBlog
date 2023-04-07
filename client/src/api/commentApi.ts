import { Comment, PaginationParams, PostListComment } from "../models";

import axiosClient from "./axiosClient";
import queryString from "query-string";

const commentApi = {
  comment(params: Comment): Promise<any> {
    const { id, ...rest } = params;
    const url = `/comment/postcomment/${id}`;
    return axiosClient.post(url, { ...rest });
  },

  getComment(
    id: string,
    params: PaginationParams
  ): Promise<PostListComment<Comment>> {
    const { page, limit } = params;

    const paramString = queryString.stringify({ page, limit });
    const url = `/comment/${id}?${paramString}`;
    return axiosClient.get(url);
  },
};

export default commentApi;
