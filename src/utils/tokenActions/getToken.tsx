export const getToken = (): string | null => {
  const token =
    localStorage.getItem('tick') === 'true'
      ? localStorage?.getItem('token')
      : sessionStorage?.getItem('token');
  return token;
};
