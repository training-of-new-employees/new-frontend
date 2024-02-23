import { apiGateway } from '../axiosApi';
export const editLessonsForUser = async (id: string) => {
  const res = await apiGateway.patch(`/api/v1/users/lessons/${id}`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
