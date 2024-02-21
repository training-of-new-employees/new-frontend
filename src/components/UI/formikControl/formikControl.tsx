import Input from '../input/input.tsx';
import { ReactNode } from 'react';

type FormikControlProps = {
  control: ReactNode;
  label: string;
  inputName: string;
  type: string;
};

function FormikControl({ control, label, inputName, type, ...rest }: FormikControlProps) {
  switch (control) {
    case 'input':
      return <Input label={label} inputName={inputName} {...rest} />;
    // case 'textarea':
    // case 'select':
    // case 'checkbox':
    default:
      return null;
  }
  return <div />;
}

export default FormikControl;
