import { apiGateway } from '../../axiosApi';
export const editNamePositionById = async (id: string, name: string) => {
  const res = await apiGateway.patch(`/api/v1/positions/update/${id}`, {
    name,
  });
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
