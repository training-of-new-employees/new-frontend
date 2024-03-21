import { baseUrl } from '../constantsUrl';
import { useStores } from '../context/root-context-store.ts';
import { request } from '../request';

const pathPosition = `${baseUrl}/admin/courses`;

export const fetchCourses = () => {
  const { storage } = useStores((state) => state.authState);
  const token = storage.getItem('token');
  return request(pathPosition, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchCoursesById = (id: number) => {
  const { storage } = useStores((state) => state.authState);
  const token = storage.getItem('token');
  return request(`${pathPosition}/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setCourses = (data: any) => {
  const { storage } = useStores((state) => state.authState);
  const token = storage.getItem('token');
  return request(pathPosition, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const editCourses = (data: any) => {
  const { storage } = useStores((state) => state.authState);
  const token = storage.getItem('token');
  return request(`${pathPosition}/${data.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getCoursById = (id: number) => {
  const { storage } = useStores((state) => state.authState);
  const token = storage.getItem('token');
  return request(`${pathPosition}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
