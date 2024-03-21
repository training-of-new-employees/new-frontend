import { apiGateway } from '../axiosApi';

export const resetPassword = async ({ email }: { email: string }) => {
  await apiGateway.post('/api/v1/password', { email });
};
