export interface Profile {
  id?: string | number | undefined;

  username?: string | undefined;
  fullname?: string | undefined;
  avatar?: string | undefined;
  password?: string | undefined;
  message?: string | undefined;

  description?: string | undefined;

  token?: string | undefined;
  expiresIn?: Date | number | undefined;

  exp?: number | undefined | Date;
  iat?: number | undefined | null;
}

export type UserType = "isGuest" | "isAdd" | "isPoster";

export interface CommentProfile {
  data: {
    userProfile: Profile;
  };
}

export interface Token {
  token: string | null;
  message?: string | null;
  expiresDate: number | null;
}

export interface AuthState {
  userProfile: Profile | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  userType: UserType | null | undefined;
}

export interface AccountMenuProps {
  id: string | number;
  name: string;
  route: string;
  icon: string;
}
