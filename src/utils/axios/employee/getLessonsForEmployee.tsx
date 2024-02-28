import { apiGateway } from '../axiosApi';
export const getLessonsForEmployee = async (id: string) => {
  const res = await apiGateway.get(`/api/v1/users/lessons/${id}`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
