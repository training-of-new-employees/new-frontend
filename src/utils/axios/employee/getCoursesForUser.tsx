import { apiGateway } from '../axiosApi';
export const getCoursesForEmployee = async () => {
  const res = await apiGateway.get(`/api/v1/users/courses`);
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
