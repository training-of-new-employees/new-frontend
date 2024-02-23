import { apiGateway } from '../../axiosApi';

export const getIniteLinkAdmin = async (email: string) => {
  try {
    const res = await apiGateway.get(`/api/v1/invitation-link/${email}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
