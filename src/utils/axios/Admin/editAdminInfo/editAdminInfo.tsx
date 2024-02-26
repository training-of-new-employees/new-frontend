import { apiGateway } from '../../axiosApi';
import { IUser } from '../../types/IUser';
export const editAdminInfo = async ({ company_name, email, name, patronymic, surname }: IUser) => {
  try {
    const res = await apiGateway.patch('/api/v1/admin/info', {
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
