import { baseUrl } from '../constantsUrl';
import { request } from '../request';

export function getProfileMe() {
  const token = localStorage.getItem('tokenKey');
  return request(`${baseUrl}/users/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export function renameProfile(data: any) {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/admin/info`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      email: data.email,
      position_name: data.position_name,
      company_name: data.company_name,
    }),
  });
}

export function createUser(data: any) {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/admin/employee`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      company_id: data.company_id,
      name: data.name,
      surname: data.surname,
      patronymic: data.patronymic,
      email: data.email,
      position_name: data.position_name,
      position_id: data.position_id,
    }),
  });
}
