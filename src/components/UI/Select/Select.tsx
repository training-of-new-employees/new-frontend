import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  options: TOptionsType[];
}

type TOptionsType = {
  key: string;
  value: string;
};

function Select({ label, inputName, options, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <Field as="select" id={inputName} name={inputName} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Select;
