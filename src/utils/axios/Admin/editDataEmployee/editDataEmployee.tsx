import { apiGateway } from '../../axiosApi';
import { IEditEmployee } from '../../types/IUser';
export const editDataEmployee = async ({
  users_id,
  position_id,
  company_name,
  email,
  name,
  patronymic,
  surname,
}: IEditEmployee) => {
  try {
    const res = await apiGateway.patch(`/api/v1/users/${users_id}`, {
      users_id,
      position_id,
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
