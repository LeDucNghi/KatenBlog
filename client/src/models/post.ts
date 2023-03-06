export interface Post {
  id?: string | number;
  title: string;
  image?: File | string;
  subTitle: string;
  categories: string;
  content: string;

  createdAt?: string;
  updatedAt?: string;

  UserId?: number | string;
}

export interface PostData<T> {
  data: {
    post: T;
  };
}
