import { apiGateway } from '../../axiosApi';
export const getUsers = async () => {
  const res = await apiGateway.get('/api/v1/users');
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
