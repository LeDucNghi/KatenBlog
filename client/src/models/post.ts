import { Errors, PaginationParams } from "./common";
import { Profile, UserType } from "./auth";

import { Comment } from "./comment";

export interface Post {
  id?: string | number | undefined;
  title: string | undefined;
  image?: string | File | null | undefined;
  subTitle: string | undefined;
  categories: string | undefined;
  content?: string | undefined;

  createdAt?: string | undefined;
  updatedAt?: string | undefined;

  userId?: number | string | undefined;
  user?: Profile;
}

export type TextStyle =
  | "bold"
  | "underline"
  | "italic"
  | "upper"
  | null
  | undefined;

export interface LoadingState {
  isAdd: boolean;
  isEdit: boolean;
}

export interface FetchingState {
  isPostList: boolean;
  isPostDetail: boolean;
  isComment: boolean;
  isCategory: boolean;
}

export interface PostState {
  isFetChing: FetchingState;
  isPosting: LoadingState;

  errors: Errors | null | undefined;

  imageFile: string | File | null | undefined;

  postList: Post[];
  userPostList: Post[];
  categoryList: Post[];
  postData: Post | null | undefined;

  commentList: Comment[];
  pagination: PaginationParams;
}

export interface PostData {
  data: {
    post: Post;
    liked?: boolean;
    userType?: UserType | null | undefined;
  };
}

export interface PostTopicWidget {
  id: number;
  topicTitle: string;

  topicContent: Post[];
}
