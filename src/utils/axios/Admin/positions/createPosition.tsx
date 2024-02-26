import { apiGateway } from '../../axiosApi';
import { IEditEmployee } from '../../types/IUser';
export const createPosition = async ({ company_id, name }: IEditEmployee) => {
  try {
    const res = await apiGateway.post('/api/v1/positions', {
      name,
      company_id,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
