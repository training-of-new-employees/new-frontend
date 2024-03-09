import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  options: TOptionsType[];
  errors?: ValuesTypes;
  touched?: ValuesTypes;
}

interface ValuesTypes {
  [key: string]: string;
}

type TOptionsType = {
  key: string;
  value: string;
};

function Select({ label, inputName, options, errors, touched, ...rest }: InputProps) {
  return (
    <div className="w-[100%] flex flex-col gap-[8px]">
      <label htmlFor={inputName} className="font-[500]">
        {label}
      </label>
      <div className="grid relative overflow-hidden">
        <Field
          className={`appearance-none row-start-1 col-start-1 w-[100%] px-[12px] py-[15px] bg-transparent border-solid ${(touched ? touched[inputName] : null) && (errors ? errors[inputName] : null) && 'border-error'} outline-none invalid:border-error rounded-[12px] border-2 placeholder-addFontColor disabled:bg-borderDisabledInput disabled:text-addFontColor`}
          as="select"
          id={inputName}
          name={inputName}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option className="w-[100%]" key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
        </Field>
        <svg
          className="pointer-events-none row-start-1 col-start-1 absolute top-[25px] right-[10px]"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.99953 7.35216L0.345703 1.69836L1.39953 0.644531L5.99953 5.24453L10.5995 0.644531L11.6534 1.69836L5.99953 7.35216Z"
            fill="#53772F"
          />
        </svg>
      </div>
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Select;
