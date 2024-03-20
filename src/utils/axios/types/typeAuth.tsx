export interface IAuth {
  email?: string | string[];
  password?: string | string[];
  company_name?: string | string[];
}

export interface IFirstEnter {
  email: string | null;
  invite: string | null;
  password: string;
}
