export const getToken = (): string | null => {
  let result = null;

  const storedToken = localStorage.getItem('token');
  // storedToken && (result = JSON.parse(storedToken))
  result = storedToken;

  return result;
};
