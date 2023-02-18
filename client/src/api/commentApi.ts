import { Comment } from "../models";
import axiosClient from "./axiosClient";

const commentApi = {
  comment(params: Comment): Promise<any> {
    const { id, ...rest } = params;
    console.log("🚀 ~ file: commentApi.ts:7 ~ comment ~ ...rest", { ...rest });
    const url = `/comment/postcomment/${id}`;
    return axiosClient.post(url, { ...rest });
  },
};

export default commentApi;
