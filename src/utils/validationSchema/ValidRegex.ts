export const regexCompany = /^[^*#]+$/;
export const regexEmail =
  // eslint-disable-next-line no-useless-escape
  /^[a-zA-Z0-9!#$%&+\-*\/=?\^_{½~]+(?:\.[a-zA-Z0-9!#$%&+\-*\/=?\^_{½~]+)*@(?!-)[a-zA-Z0-9-]*(?:\.[a-zA-Z0-9]+)+$/;
export const regexPassword =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{4,}$/;
export const regexName = /^[A-Za-zА-Яа-я0-9\s!$%&()+,-./:;<=>?@[\]^_{|}~]+$/;

export const regexNameCourse = /^[A-Za-zА-Яа-я0-9\s!$%&()+,-./:;<=>?@[\]^_`{|}~]+$/;
