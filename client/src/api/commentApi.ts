import { Comment, PostListComment } from "../models";

import axiosClient from "./axiosClient";

const commentApi = {
  comment(params: Comment): Promise<any> {
    const { id, ...rest } = params;
    const url = `/comment/postcomment/${id}`;
    return axiosClient.post(url, { ...rest });
  },

  getComment(id: string): Promise<PostListComment<Comment>> {
    const url = `/comment/${id}?page=1&limit=2`;
    return axiosClient.get(url);
  },
};

export default commentApi;
