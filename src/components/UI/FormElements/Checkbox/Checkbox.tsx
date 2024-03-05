import { Field } from 'formik';

interface InputProps {
  label?: string;
  inputName: string;
  value: string | number;
}

function Checkbox({ inputName, label, value, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <Field
        type="checkbox"
        id={inputName}
        name={inputName}
        value={value}
        {...rest}
        className="w-[20px] h-[20px]"
      />
    </div>
  );
}

export default Checkbox;
