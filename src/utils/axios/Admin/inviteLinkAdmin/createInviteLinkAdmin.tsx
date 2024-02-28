import { apiGateway } from '../../axiosApi';

export const createInviteLinkAdmin = async (email: string) => {
  try {
    const res = await apiGateway.patch(`/api/v1/invitation-link`, {
      email,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
