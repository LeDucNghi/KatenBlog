export interface Profile {
  id?: string | number | undefined;

  username: string | undefined;
  fullname?: string | undefined;
  avatar?: string | undefined;
  password?: string | undefined;
  message?: string | undefined;

  token?: string | undefined;
  expiresIn?: Date | number | undefined;

  exp?: number | undefined | null;
  iat?: number | undefined | null;
}

export type UserType = "isGuest" | "isAdd" | "isPoster";

export interface AuthState {
  userProfile: Profile | null | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  userType: UserType | null | undefined;
}
