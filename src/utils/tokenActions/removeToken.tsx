export const removeToken = (): void => {
  localStorage.getItem('tick') === 'true'
    ? localStorage.removeItem('token')
    : sessionStorage.removeItem('token');
};
