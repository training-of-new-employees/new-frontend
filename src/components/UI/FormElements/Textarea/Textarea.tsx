import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError/TextError.tsx';

interface InputProps {
  label?: string;
  inputName: string;
  placeholder?: string;
  errors?: ValuesTypes;
  touched?: ValuesTypes;
}

interface ValuesTypes {
  [key: string]: string;
}

function Textarea({ label, inputName, placeholder, errors, touched, ...rest }: InputProps) {
  return (
    <div className="w-[100%] flex flex-col gap-[8px]">
      <label htmlFor={inputName} className="font-[500]">
        {label}
      </label>
      <Field
        className={`w-[100%] px-[12px] py-[15px] border-solid ${(touched ? touched[inputName] : null) && (errors ? errors[inputName] : null) && 'border-error'} outline-none invalid:border-error rounded-[12px] border-2 placeholder-addFontColor disabled:bg-borderDisabledInput disabled:text-addFontColor`}
        as="textarea"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={inputName} component={TextError} />
    </div>
  );
}

export default Textarea;
