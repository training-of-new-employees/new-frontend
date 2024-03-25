import { apiGateway } from '../axiosApi';
import { IFirstEnter } from '../types/typeAuth.tsx';

export const firstEnter = async ({ email, invite, password }: IFirstEnter) => {
  await apiGateway.post('/api/v1/admin/verify', {
    email,
    invite,
    password,
  });
};
