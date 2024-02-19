import { Field, ErrorMessage } from 'formik';
import TextError from '../textError/textError.tsx';

interface InputProps {
  label: string;
  inputName: string;
}

function Input({ label, inputName, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <Field id={inputName} name={inputName} {...rest} />
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Input;
