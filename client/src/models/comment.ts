import { Profile } from "./auth";

export interface Likes {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  commentId?: number | string;
  postId?: number;
  userId?: number;
}

export interface Comment {
  id?: string;
  content: string;

  userId?: string;
  postId?: string;

  user?: Profile | null;

  likes?: Likes[] | undefined;

  createdAt?: string;
  updatedAt?: string;
}
