import { Errors } from "./common";
import { UserType } from "./auth";

export interface Post {
  id?: string | number | undefined;
  title: string | undefined;
  image?: string | File | null | undefined;
  subTitle: string | undefined;
  categories: string | undefined;
  content: string | undefined;

  createdAt?: string | undefined;
  updatedAt?: string | undefined;

  UserId?: number | string | undefined;
}

export interface LoadingState {
  isAdd: boolean;
  isEdit: boolean;
}

export interface PostState {
  isLoading: boolean;
  isPosting: LoadingState;

  errors: Errors | null | undefined;

  imageFile: string | File | null | undefined;
  postData: Post | null | undefined;
}

export interface PostData {
  data: {
    post: Post;
    liked?: boolean;
    userType?: UserType | null | undefined;
  };
}
