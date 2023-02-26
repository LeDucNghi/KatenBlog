export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface PostListRes<T> {
  data: T[];
}

export interface PostListComment<T> {
  data: T[];
}

export interface Auth<T> {
  data: T;
  token: string;
}
