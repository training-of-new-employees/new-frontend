import { apiGateway } from '../../axiosApi';

export const activationEmployee = async ({
  email,
  password,
  invite,
}: {
  email: string;
  password: string;
  invite: string;
}) => {
  try {
    const res = await apiGateway.post('/api/v1/users/set-password', {
      email,
      password,
      invite,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
