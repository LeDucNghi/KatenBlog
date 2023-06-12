export interface PaginationParams {
  page: number;
  limit: number;
  totalRows?: number;
  totalPages?: number;
}

export interface PostListRes<T> {
  data: {
    data: T[];
    pagination?: PaginationParams;
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

export interface Options {
  id: number;
  optionName: string;
  optionValue: string;
}
