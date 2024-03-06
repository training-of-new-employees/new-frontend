// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddCourseForm() {
  // const [serverError, setServerError] = useState('sample of server error');

  const InitialValues = {
    nameAddCourse: '',
    descriptionAddCourse: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.nameAddCourse) {
      errors.nameAddCourse = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="addCourse"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameAddCourse"
        placeholder="Добавьте название"
        label="Название*"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionAddCourse"
        placeholder="Добавьте описание"
        label="Описание"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddCourseForm;
