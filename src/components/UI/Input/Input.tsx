import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';

interface InputProps {
  label?: string;
  inputName: string;
  placeholder?: string;
  disabled?: boolean;
}

function Input({ label, inputName, disabled, ...rest }: InputProps) {
  return (
    <div className="m-3">
      <label htmlFor={inputName}>{label}</label>
      <Field
        className="border-solid border-2 border-green-800"
        id={inputName}
        name={inputName}
        disabled={disabled}
        {...rest}
      />
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Input;
