export interface PaginationParams {
  page: number;
  limit: number;
  totalRows?: number;
  totalPages?: number;
}

export interface PostListRes<T> {
  data: {
    postList: T[];
  };
}

export interface PostListComment<T> {
  data: {
    data: T[];
    pagination: PaginationParams;
  };
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
