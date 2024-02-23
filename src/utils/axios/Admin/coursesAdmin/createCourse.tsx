import { ICreateCourses } from './coursesType';
import { apiGateway } from '../../axiosApi';

export const createCourses = async ({ name, discripition }: ICreateCourses) => {
  try {
    const res = await apiGateway.post(' /api/v1/admin/courses', {
      name,
      discripition,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
