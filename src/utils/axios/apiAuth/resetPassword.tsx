import { IAuth } from './type';
import { apiGateway } from '../axiosApi';

export const registration = async ({ email }: IAuth) => {
  if (email) {
    try {
      const res = await apiGateway.post('/api/v1/password', {
        email,
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
