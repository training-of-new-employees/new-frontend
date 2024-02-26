import { apiGateway } from '../axiosApi';
export const getCourseForEmployee = async (id: string) => {
  const res = await apiGateway.get(` /api/v1/users/courses/${id}`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
