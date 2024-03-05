import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  isPassword?: boolean;
  errors: ValuesTypes;
  touched: ValuesTypes;
}
interface ValuesTypes {
  [key: string]: string;
}

function Input({
  label,
  inputName,
  disabled,
  type,
  isPassword,
  placeholder,
  errors,
  touched,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const fieldType = isPassword ? (showPassword ? 'text' : 'password') : type;
  return (
    <div className="">
      <label htmlFor={inputName}>{label}</label>
      <div className="relative">
        <Field
          className={`w-[100%] h-[60px] px-[18px] pt-[7px] border-solid ${touched[inputName] && errors[inputName] && 'border-error'} outline-none invalid:border-error rounded-[12px] border-2 peer placeholder-transparent disabled:bg-borderDisabledInput disabled:text-addFontColor`}
          id={inputName}
          name={inputName}
          disabled={disabled}
          type={fieldType}
          placeholder="."
          {...rest}
        />
        {placeholder && (
          <span className="text-addFontColor absolute left-[20px] transition-all duration-300 top-[8px] text-[12px] peer-placeholder-shown:top-[20px] peer-placeholder-shown:text-[16px] peer-focus:top-[8px] peer-focus:text-[12px]">
            {placeholder}
          </span>
        )}
        {isPassword && (
          <button
            aria-label="button"
            type="button"
            onClick={togglePasswordVisibility}
            className={`w-[40px] h-[40px] bg-no-repeat cursor-pointer bg-center border-none absolute top-[12px] right-[20px] border-r-[12px] ${showPassword ? 'bg-close-pass' : 'bg-open-pass'}`}
          />
        )}
      </div>
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Input;
