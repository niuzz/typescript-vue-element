export interface IUserData {
  id: number;
  username: string;
  password: string;
  name: string;
  avatar: string;
  introduction: string;
  email: string;
  phone: number | string;
  roles: Array<string>;
}
