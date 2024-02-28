import { apiGateway } from '../../axiosApi';
export const getPositions = async () => {
  const res = await apiGateway.get('/api/v1/positions');
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
