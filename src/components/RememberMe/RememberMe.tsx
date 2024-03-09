// @TODO в зависимости от значения чекбокса сохранять данные в SessionStorage (default) или LocalStorage

import { Field } from 'formik';

function RememberMe() {
  return (
    <div className="flex items-center gap-[10px]">
      <Field
        type="checkbox"
        id="rememberMe"
        name="rememberMe"
        className="w-[18px] h-[18px] rounded-[2px]"
      />
      <label htmlFor="rememberMe">Запомнить меня</label>
    </div>
  );
}

export default RememberMe;
