import { apiGateway } from '../axiosApi';
export const getLessonsDataForUser = async (id: string) => {
  const res = await apiGateway.get(`/api/v1/users/courses/${id}/lessons`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
