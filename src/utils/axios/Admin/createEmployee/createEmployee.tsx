import { apiGateway } from '../../axiosApi';
import { IEditEmployee } from '../../types/IUser';
export const createEmployee = async ({
  company_id,
  company_name,
  email,
  name,
  patronymic,
  surname,
}: IEditEmployee) => {
  try {
    const res = await apiGateway.post(`/api/v1/admin/employee`, {
      company_id,
      company_name,
      email,
      name,
      patronymic,
      surname,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
