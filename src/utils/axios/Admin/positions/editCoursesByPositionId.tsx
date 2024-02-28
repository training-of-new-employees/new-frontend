import { apiGateway } from '../../axiosApi';
export const editCoursesByPositionId = async (id: string, course_id: number[]) => {
  const res = await apiGateway.patch(`/api/v1/positions/${id}/courses`, {
    course_id,
  });
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
