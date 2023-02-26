export interface Profile {
  name: string;
  fullname?: string;
  avatar?: string;
  password?: string;
  // token?: string;
  message?: string;
}

export interface Error {
  data: {
    message: string;
  };

  status: number;
  statusText: string;
}
