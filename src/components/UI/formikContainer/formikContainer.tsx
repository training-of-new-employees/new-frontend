import { Formik, Form } from 'formik';
import FormikControl from '../formikControl/formikControl';

interface ValuesTypes {
  email: string | null;
  text: string | null;
}

interface ErrorsTypes {
  email?: string;
  text?: string;
}

function FormikContainer() {
  const InitialValues = {
    email: '',
    text: '',
  };
  const Validation = (values: ValuesTypes) => {
    const errors: ErrorsTypes = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.text) {
      errors.text = 'Required';
    }
    console.log(errors);
    console.log(values);
    return errors;
  };

  const onSubmit = (values: ValuesTypes) => console.log('Form data', values);
  return (
    <Formik initialValues={InitialValues} validate={Validation} onSubmit={onSubmit}>
      {() => (
        <Form>
          <FormikControl control="input" type="email" label="Email" inputName="email" />
          <FormikControl control="input" type="text" label="Text" inputName="text" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
