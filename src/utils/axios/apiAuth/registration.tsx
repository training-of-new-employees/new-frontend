import { IAuth } from './type';
import { apiGateway } from '../axiosApi';

export const registration = async ({ email, password, company_name }: IAuth) => {
  try {
    const res = await apiGateway.post('/api/v1/admin/register', {
      email,
      password,
      company_name,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
