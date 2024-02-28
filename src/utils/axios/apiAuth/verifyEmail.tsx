import { apiGateway } from '../axiosApi';

export const verifyEmail = async (code: string) => {
  try {
    const res = await apiGateway.post('/api/v1/admin/verify', {
      code,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
