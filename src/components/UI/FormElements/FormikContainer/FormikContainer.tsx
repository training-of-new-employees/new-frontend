// @TODO заменить свойство validate на ValidationSchema при использовании YUP

import { Children, cloneElement, ReactNode, isValidElement } from 'react';
import { Formik, Form } from 'formik';

interface ValuesTypes {
  [key: string]: string | string[];
}
// тип any прописан для child в методе cloneElement
interface IFormikContainer {
  InitialValues: ValuesTypes;
  Validation: (arg: ValuesTypes) => void;
  onSubmit: (arg: ValuesTypes) => void;
  children: ReactNode[] | ReactNode;
  formName: string;
}

function FormikContainer({
  InitialValues,
  Validation,
  onSubmit,
  formName,
  children,
}: IFormikContainer) {
  return (
    <Formik initialValues={InitialValues} validate={Validation} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form
          id={formName}
          className="w-[100%] flex flex-row flex-wrap gap-y-[12px] justify-between mb-[20px]"
        >
          {Children?.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(child, {
                ...child.props,
                errors,
                touched,
              });
            }
          })}
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
