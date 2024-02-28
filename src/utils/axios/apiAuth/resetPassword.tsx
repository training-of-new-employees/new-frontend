import { apiGateway } from '../axiosApi';

export const resetPassword = async ({ email }: { email: string }) => {
  try {
    const res = await apiGateway.post('/api/v1/password', { email });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
