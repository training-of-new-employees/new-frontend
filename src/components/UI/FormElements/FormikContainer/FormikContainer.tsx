// @TODO заменить свойство validate на ValidationSchema при использовании YUP

import { Children, cloneElement, ReactNode, isValidElement } from 'react';
import { Formik, Form } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

interface ValuesTypes {
  [key: string]: string | string[];
}
// тип any прописан для child в методе cloneElement
interface IFormikContainer {
  InitialValues: ValuesTypes;
  onSubmit: (arg: ValuesTypes) => void;
  children: ReactNode[] | ReactNode;
  formName: string;
  Schema?: any;
}

function FormikContainer({
  InitialValues,
  onSubmit,
  formName,
  children,
  Schema,
}: IFormikContainer) {
  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={onSubmit}
      validationSchema={toFormikValidationSchema(Schema)}
    >
      {({ errors, touched, values }) => (
        <Form
          id={formName}
          className="w-[100%] flex flex-row flex-wrap gap-y-[15px] justify-between mb-[20px]"
        >
          {Children?.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                ...child.props,
                errors,
                touched,
                values,
              });
            }
          })}
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
