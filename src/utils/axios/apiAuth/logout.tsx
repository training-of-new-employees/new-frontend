import { apiGateway } from '../axiosApi';

export const logout = async (): Promise<void> => {
  apiGateway.post(`/api/v1/logout`).catch((err) => {
    console.log(`При работе приложения произошла ошибка ${err}`);
  });
};
