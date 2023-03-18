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

export type UserType = "isGuest" | "isAdd" | "isPoster";

export interface AuthState {
  userInformation: Profile | null | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  userType: UserType | null | undefined;
}
