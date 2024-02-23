import { apiGateway } from '../axiosApi';
export const getUserInfo = async () => {
  try {
    const res = await apiGateway.get('/api/v1/users/info');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
