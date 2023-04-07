import { Profile } from "./auth";

export interface Comment {
  id?: string;
  content: string;

  userId?: string;
  postId?: string;

  user?: Profile | null;

  createdAt?: string;
  updatedAt?: string;
}
