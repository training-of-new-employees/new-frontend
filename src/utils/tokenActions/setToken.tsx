export const setToken = (access_token: string): void => {
  localStorage.getItem('tick') === 'true'
    ? localStorage.setItem('token', JSON.stringify(access_token))
    : sessionStorage.setItem('token', JSON.stringify(access_token));
};
