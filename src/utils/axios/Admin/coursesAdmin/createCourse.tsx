import { apiGateway } from '../../axiosApi';
import { ICourses } from '../../types/coursesType';

export const createCourse = async ({ name, description }: ICourses) => {
  try {
    const res = await apiGateway.post('/api/v1/admin/courses', {
      name,
      description,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
