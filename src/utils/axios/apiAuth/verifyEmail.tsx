import { apiGateway } from '../axiosApi';

export const verifyEmail = async (code: string) => {
  await apiGateway.post('/api/v1/admin/verify', {
    code,
  });
};
