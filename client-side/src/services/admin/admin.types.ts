export interface IAdmin {
  id: string;
  name: string;
  email: string;
  contactNo: string | null;
  photo: string | null;
  address?: string | null;
  isBlocked: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface ICreateAdminPayload {
  name: string;
  email: string;
  password: string;
  contactNo: string;
}
