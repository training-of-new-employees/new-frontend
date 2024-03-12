// @TODO :refactor. Выяснить, почему formik не перерисовывает инпут, если внутри формы его обернуть в div. Выяснила, из-за мапа пропсов в чилдрены (мапится в самый верхний слой, если обернуть в div - попадают прямо в div). Что с этим делать?
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  isCopyLink?: boolean;
  errors?: ValuesTypes;
  touched?: ValuesTypes;
  values?: ValuesTypes;
  width?: string;
}
interface ValuesTypes {
  [key: string]: string;
}

function InputClassic({
  label,
  inputName,
  disabled,
  type,
  isCopyLink,
  placeholder,
  errors,
  touched,
  values,
  width,
  ...rest
}: InputProps) {
  const copyToClipboard = () => {
    {
      if (values) {
        navigator.clipboard.writeText(values[inputName]).then(() => '');
      }
    }
  };
  return (
    <div className={`${width ? width : 'w-[100%]'} flex flex-col gap-[8px]`}>
      <label htmlFor={inputName} className="font-[500]">
        {label}
      </label>
      <div className="relative">
        <Field
          className={`w-[100%] z-10 h-[60px] px-[12px] border-solid ${(touched ? touched[inputName] : null) && (errors ? errors[inputName] : null) && 'border-error'} outline-none invalid:border-error rounded-[12px] border-2 placeholder-addFontColor disabled:bg-borderDisabledInput disabled:text-addFontColor`}
          id={inputName}
          name={inputName}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {isCopyLink && (
          <div className="z-30 absolute top-[12px] right-[20px] flex flex-row gap-[28px]">
            <span className="relative group">
              <button
                aria-label="button"
                type="button"
                onClick={() => console.log('test')}
                className={`w-[20px] h-[35px] bg-no-repeat cursor-pointer bg-center bg-generate-link hover:bg-generate-link-green active:bg-generate-link border-none border-r-[12px]`}
              />
              <span className="hidden group-hover:block border-[1px] bg-white absolute top-[40px] right-[0px] z-40 w-[366px] h-[40px] rounded-[8px] p-[8px] shadow-md">
                Сгенерировать новую ссылку-приглашение
              </span>
            </span>
            <span className="relative group">
              <button
                aria-label="button"
                type="button"
                onClick={copyToClipboard}
                className={`w-[20px] h-[35px] bg-no-repeat cursor-pointer bg-center bg-copy-link hover:bg-copy-link-green active:bg-copy-link border-none border-r-[12px]`}
              />
              <span className="hidden group-hover:block border-[1px] bg-white absolute top-[40px] right-[0px] z-40 w-[296px] h-[40px] rounded-[8px] p-[8px] shadow-md">
                Скопировать ссылку-приглашение
              </span>
            </span>
            <span className="relative group">
              <button
                aria-label="button"
                type="button"
                onClick={() => console.log('test')}
                className={`w-[20px] h-[35px] bg-no-repeat cursor-pointer bg-center bg-send-link hover:bg-send-link-green active:bg-send-link border-none border-r-[12px]`}
              />
              <span className="hidden group-hover:block border-[1px] bg-white absolute top-[38px] right-[-10px] z-40 w-[277px] h-[40px] rounded-[8px] p-[8px] shadow-md">
                Отправить ссылку-приглашение
              </span>
            </span>
          </div>
        )}
      </div>
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default InputClassic;
