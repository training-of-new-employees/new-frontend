// @TODO в зависимости от значения чекбокса сохранять данные в SessionStorage (default) или LocalStorage

import { Field } from 'formik';

function RememberMe() {
  return (
    <div>
      <Field type="checkbox" id="rememberMe" name="rememberMe" className="w-[20px] h-[20px]" />
      <label htmlFor="rememberMe">Запомнить меня</label>
    </div>
  );
}

export default RememberMe;
