export interface Post {
  id?: number;
  title: string;
  subTitle: string;
  categories: string;
  content: string;
  image?: File;

  createdAt?: string;
  updatedAt?: string;
}
