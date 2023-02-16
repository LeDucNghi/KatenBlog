export interface Post {
  id?: number;
  title: string;
  subTitle: string;
  categories: string;
  content: string;
  username: string;

  createdAt?: string;
  updatedAt?: string;
}
