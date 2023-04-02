import { Profile } from "./auth";

export interface Comment {
  id?: string;
  content: string;
  image?: string;

  UserId?: string;
  PostId?: string;

  user?: Profile

  createdAt?: string;
  updatedAt?: string;
}
