import { apiGateway } from '../../axiosApi';
import { ICourses } from '../../types/coursesType';

export const editCourses = async ({ name, description, archived, id }: ICourses) => {
  try {
    const res = await apiGateway.patch(`/api/v1/admin/courses/${id}`, {
      name,
      description,
      archived,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
