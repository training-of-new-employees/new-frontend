// @TODO заменить свойство validate на ValidationSchema при использовании YUP

import { ReactNode } from 'react';
import { Formik, Form } from 'formik';
import Button from '../Button/Button.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

interface IFormikContainer {
  InitialValues: ValuesTypes;
  Validation: (arg: ValuesTypes) => void;
  onSubmit: (arg: ValuesTypes) => void;
  children: ReactNode;
  buttonText: string;
}

function FormikContainer({
  InitialValues,
  Validation,
  onSubmit,
  buttonText,
  children,
}: IFormikContainer) {
  return (
    <Formik
      className="m-10"
      initialValues={InitialValues}
      validate={Validation}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {children}
          <Button type="submit">{buttonText}</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
