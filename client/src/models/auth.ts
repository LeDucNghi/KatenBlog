export interface Profile {
  id?: string | number | undefined;
  name: string | undefined;
  fullname?: string | undefined;
  avatar?: string | undefined;
  password?: string | undefined;
  token?: string | undefined;
  message?: string | undefined;
  expiresIn?: Date | number | undefined;
}

export interface UserType {
  isGuest: boolean;
  isPoster: boolean;
  isAdd: boolean;
}

export interface AuthState {
  userInformation: Profile | null | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  userType: UserType;
}

export interface Error {
  data: {
    message: string;
  };

  status: number;
  statusText: string;
}
