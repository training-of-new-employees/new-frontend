import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError';

interface InputProps {
  label?: string;
  inputName: string;
  placeholder?: string;
}

function Textarea({ label, inputName, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <Field
        className="border-solid border-2 border-green-800"
        as="textarea"
        id={inputName}
        name={inputName}
        {...rest}
      />
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Textarea;
