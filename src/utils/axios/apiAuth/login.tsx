import { apiGateway } from '../axiosApi';
import { IAuth } from '../types/typeAuth';

// export const login = async ({ email, password }: IAuth) => {
//   try {
//     const res = await apiGateway.post(`/api/v1/login`, {
//       email,
//       password,
//     });
//     localStorage.setItem('token', res.data);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const login = async ({ email, password }: IAuth) => {
  await apiGateway.post(`/api/v1/login`, {
    email,
    password,
  });
};
