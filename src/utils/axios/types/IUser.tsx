export interface IUser {
  id: number;
  company_name: string;
  email: string;
  name: string;
  patronymic: string;
  surname: string;
  position_name?: string;
  admin?: boolean;
}
export interface IEditEmployee extends IUser {
  company_id: number;
  users_id: number;
  position_id: string;
}
