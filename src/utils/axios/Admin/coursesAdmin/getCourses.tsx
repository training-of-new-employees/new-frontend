import { apiGateway } from '../../axiosApi';
export const getCoursesForAdmin = async () => {
  try {
    const res = await apiGateway.get('/api/v1/admin/courses');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
