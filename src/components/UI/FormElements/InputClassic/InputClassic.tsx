// @TODO :refactor. Выяснить, почему formik не перерисовывает инпут, если внутри формы его обернуть в div. Выяснила, из-за мапа пропсов в чилдрены. Что с этим делать?
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
  width,
  ...rest
}: InputProps) {
  const copyToClipboard = () => {
    {
      navigator.clipboard.writeText('test');
    }
  };
  return (
    <div className={`${width ? width : 'w-[100%]'} flex flex-col gap-[8px]`}>
      <label htmlFor={inputName} className="font-[500]">
        {label}
      </label>
      <div className="relative">
        <Field
          className={`w-[100%] h-[60px] px-[12px] border-solid ${(touched ? touched[inputName] : null) && (errors ? errors[inputName] : null) && 'border-error'} outline-none invalid:border-error rounded-[12px] border-2 placeholder-addFontColor disabled:bg-borderDisabledInput disabled:text-addFontColor`}
          id={inputName}
          name={inputName}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {isCopyLink && (
          <div className="z-30 absolute top-[12px] right-[20px] flex flex-row gap-[2px]">
            <button
              aria-label="button"
              type="button"
              onClick={copyToClipboard}
              className={`w-[40px] h-[40px] bg-no-repeat cursor-pointer bg-center border-none border-r-[12px]`}
            />
            <button
              aria-label="button"
              type="button"
              onClick={copyToClipboard}
              className={`w-[40px] h-[40px] bg-no-repeat cursor-pointer bg-center border-none border-r-[12px]`}
            />
            <button
              aria-label="button"
              type="button"
              onClick={copyToClipboard}
              className={`w-[40px] h-[40px] bg-no-repeat cursor-pointer bg-center border-none border-r-[12px]`}
            />
          </div>
        )}
      </div>
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default InputClassic;
