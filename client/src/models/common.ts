export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface PostListRes<T> {
  data: {
    postList: T[];
  };
}

export interface PostListComment<T> {
  data: T[];
}

export interface Auth<T> {
  data: T;
  token: string;
}

export interface Errors {
  isError: boolean;
  status?: number;
  statusText?: string;

  repsonse: {
    data: {
      message: string;
    };
  };
}
