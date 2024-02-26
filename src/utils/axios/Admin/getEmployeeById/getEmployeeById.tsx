import { apiGateway } from '../../axiosApi';
export const getEmployeeById = async (id: string) => {
  const res = await apiGateway.get(`/api/v1/users/${id}`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
