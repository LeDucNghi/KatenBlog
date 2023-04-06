import { Profile } from "./auth";

export interface Comment {
  id?: string;
  content: string;

  UserId?: string;
  PostId?: string;

  user?: Profile;

  createdAt?: string;
  updatedAt?: string;
}
