import { ReactNode } from 'react';
import Input from '../Input/Input.tsx';
import InputClassic from '../InputClassic/InputClassic.tsx';
import Select from '../Select/Select.tsx';
import Textarea from '../Textarea/Textarea.tsx';

type FormikControlProps = {
  control: ReactNode;
  label?: string;
  inputName: string;
  type?: string;
  placeholder?: string;
  options: TOptionsType[];
  disabled?: boolean;
  isPassword?: boolean;
  errors?: ValuesTypes;
  touched?: ValuesTypes;
  isCopyLink?: boolean;
  width?: string;
};

type TOptionsType = {
  key: string;
  value: string;
};

interface ValuesTypes {
  [key: string]: string;
}

function FormikControl({
  control,
  label,
  inputName,
  type,
  placeholder,
  options,
  disabled,
  isPassword,
  isCopyLink,
  errors,
  touched,
  width,
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
          isPassword={isPassword}
          errors={errors}
          touched={touched}
          {...rest}
        />
      );
    case 'inputClassic':
      return (
        <InputClassic
          label={label}
          inputName={inputName}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          isCopyLink={isCopyLink}
          errors={errors}
          touched={touched}
          width={width}
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
