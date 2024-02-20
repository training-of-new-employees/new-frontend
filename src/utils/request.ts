export function checkResponse(res: { ok: any; json: () => any; status: any }) {
  if (res.ok) {
    const json = res.json();
    return json;
  }
  return Promise.reject(res.status);
}

export const request = (url: string, options: object) => fetch(url, options).then(checkResponse);
