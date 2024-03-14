import { apiGateway } from '../axiosApi';
import { IAuth } from '../types/typeAuth';

// export const login = async ({ email, password }: IAuth) => {
//   try {
//     const res = await apiGateway.post(`/api/v1/login`, {
//       email,
//       password,
//     });
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

// export const login = async ({ email, password }: IAuth) => {
//   apiGateway
//     .post(`/api/v1/login`, { email, password })
//     .then(function (response) {
//       console.log(response);
//       return response;
//     })
//     .catch(function (error) {
//       console.log(error);
//       return error;
//     });
// };
