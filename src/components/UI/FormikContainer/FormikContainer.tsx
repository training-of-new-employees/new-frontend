// @TODO заменить свойство validate на ValidationSchema при использовании YUP

import { ReactNode } from 'react';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Button from '../Button/Button.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

interface IFormikContainer {
  InitialValues: ValuesTypes;
  Validation?: (arg: ValuesTypes) => void;
  onSubmit: (arg: ValuesTypes) => void;
  children: ReactNode;
  buttonText: string;
  Schema?: any;
}

function FormikContainer({
  InitialValues,
  Validation,
  onSubmit,
  buttonText,
  children,
  Schema,
}: IFormikContainer) {
  return (
    <Formik
      className="m-10"
      initialValues={InitialValues}
      validate={Validation}
      onSubmit={onSubmit}
      validationSchema={toFormikValidationSchema(Schema)}
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
