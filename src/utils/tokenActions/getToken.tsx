export const getToken = (): string | null => {
  let result = null;

  const storedToken = localStorage.getItem('tokenKey');
  // storedToken && (result = JSON.parse(storedToken))
  result = storedToken;

  return result;
};
