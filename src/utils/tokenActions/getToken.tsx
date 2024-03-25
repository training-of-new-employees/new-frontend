export const getToken = (): string | null => {
  let result = null;

  const storedToken = localStorage.getItem('tokenKey');
  // storedToken && (result = JSON.parse(storedToken))
  result = storedToken;


export const getToken = (): string | null => {
  const token =
    localStorage.getItem('tick') === 'true'
      ? localStorage?.getItem('token')
      : sessionStorage?.getItem('token');
  return token;
};
