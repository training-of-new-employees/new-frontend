import { apiGateway } from '../../axiosApi';
export const coursesForPosition = async (id: string) => {
  const res = await apiGateway.get(`/api/v1/positions/${id}/courses`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
