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

export type ApiStatus = "Network Error" | "Available";

export interface FetchingState {
  isPostList: boolean;
  isPostDetail: boolean;
  isComment: boolean;
  isCategory: boolean;
  isRecentBlog: boolean;
}

export interface PostState {
  apiStatus: ApiStatus;

  isFetChing: FetchingState;
  isPosting: LoadingState;

  errors: Errors | null | undefined;

  imageFile: string | File | null | undefined;

  postList: Post[] | null;
  userPostList: Post[] | null;
  categoryList: Post[] | null;
  recentList: RecentBlog[] | null;
  popularList: Post[] | null;
  latestList: Post[] | null;
  postData: Post | null;

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

export interface RecentBlog {
  id: string | number;
  createdAt?: string;
  updatedAt?: string;
  userId: number;
  postId: number;
  post: Post;
}
