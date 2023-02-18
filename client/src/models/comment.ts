export interface Comment {
  id?: string;
  content: string;
  image?: string;

  UserId?: string;
  PostId?: string;

  createdAt?: string;
  updatedAt?: string;
}
