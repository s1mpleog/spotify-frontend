export type IRegisterUser = {
  username: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  avatar?: File;
};
