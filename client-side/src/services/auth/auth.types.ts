export enum ERole {
  Admin = "Admin",
  User = "User",
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: ERole;
}
