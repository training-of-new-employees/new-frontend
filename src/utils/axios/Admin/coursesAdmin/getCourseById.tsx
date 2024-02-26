import { apiGateway } from '../../axiosApi';
export const getCourseByIdForAdmin = async ({ id }: { id: string }) => {
  try {
    const res = await apiGateway.get(`/api/v1/admin/courses${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
