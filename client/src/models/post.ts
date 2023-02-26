export interface Post {
  id?: number;
  title: string;
  subTitle: string;
  categories: string;
  content: string;
  image?: string;

  createdAt?: string;
  updatedAt?: string;
}
