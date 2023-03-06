export interface Profile {
  id?: string | number;
  name: string;
  fullname?: string;
  avatar?: string;
  password?: string;
  token?: string;
  message?: string;
}

export interface UserType {
  isGuest: boolean;
  isPoster: boolean;
  isAdd: boolean;
}

export interface Error {
  data: {
    message: string;
  };

  status: number;
  statusText: string;
}
