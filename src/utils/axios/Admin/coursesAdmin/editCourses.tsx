import { ICreateCourses } from './coursesType';
import { apiGateway } from '../../axiosApi';

export const editCourses = async ({ name, discripition, id }: ICreateCourses) => {
  try {
    const res = await apiGateway.patch(`/api/v1/admin/courses/${id}`, {
      name,
      discripition,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
