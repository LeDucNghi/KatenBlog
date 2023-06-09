import { Comment, PaginationParams, PostListRes } from "../models";

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
  ): Promise<PostListRes<Comment>> {
    const { page, limit } = params;

    const paramString = queryString.stringify({ page, limit });
    const url = `/comment/${id}?${paramString}`;
    return axiosClient.get(url);
  },

  likeComment(postId: string, commentId: string): Promise<any> {
    const url = `/comment/liked/${postId}/${commentId}`;
    return axiosClient.post(url);
  },

  deleteComment(commentId: string): Promise<any> {
    const url = `/comment/${commentId}`;
    return axiosClient.delete(url);
  },
};

export default commentApi;
