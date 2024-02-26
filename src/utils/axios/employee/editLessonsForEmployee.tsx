import { apiGateway } from '../axiosApi';
import { IEditLessons } from '../types/lessonsType';
export const editLessonsForEmployee = async ({
  name,
  content,
  url_picture,
  archived,
  id,
}: IEditLessons) => {
  const res = await apiGateway.patch(`/api/v1/users/lessons/${id}`, {
    name,
    content,
    url_picture,
    archived,
    id,
  });
  try {
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
