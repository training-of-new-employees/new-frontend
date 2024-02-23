import { apiGateway } from '../../axiosApi';
export const getPosition = async (id: string) => {
  const res = await apiGateway.get(`/api/v1/positions/${id}`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
