import { apiGateway } from '../axiosApi';
import { IAuth } from '../types/typeAuth';

// export const registration = async ({ email, password, company_name }: IAuth) => {
//   try {
//     const res = await apiGateway.post('/api/v1/admin/register', {
//       email,
//       password,
//       company_name,
//     });
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const registration = async ({ email, password, company_name }: IAuth) => {
  await apiGateway.post('/api/v1/admin/register', {
    email,
    password,
    company_name,
  });
};
