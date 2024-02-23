export const setToken = (access_token: string): void => {
  localStorage.setItem('tokenKey', JSON.stringify(access_token));
};
