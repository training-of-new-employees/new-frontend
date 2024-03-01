import { ReactNode } from 'react';
import Input from '../Input/Input.tsx';
import Select from '../Select/Select.tsx';
import Textarea from '../Textarea/Textarea.tsx';

type FormikControlProps = {
  control: ReactNode;
  label?: string;
  inputName: string;
  type: string;
  placeholder?: string;
  options: TOptionsType[];
  disabled?: boolean;
};

type TOptionsType = {
  key: string;
  value: string;
};

function FormikControl({
  control,
  label,
  inputName,
  type,
  placeholder,
  options,
  disabled,
  ...rest
}: FormikControlProps) {
  switch (control) {
    case 'input':
      return (
        <Input
          label={label}
          inputName={inputName}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          {...rest}
        />
      );
    case 'textarea':
      return <Textarea label={label} inputName={inputName} placeholder={placeholder} {...rest} />;
    case 'select':
      return <Select label={label} inputName={inputName} options={options} {...rest} />;
    default:
      return null;
  }
  return <div />;
}

export default FormikControl;
