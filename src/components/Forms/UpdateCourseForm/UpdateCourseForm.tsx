// @TODO прокинуть значения в initial values при клике на конкретный урок
// import { useState } from 'react';

import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateCourseForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameCourseUpdate: 'Some name',
    descriptionCourseUpdate: 'Some text',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.nameCourseUpdate) {
      errors.nameCourseUpdate = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="updateCourse"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameCourseUpdate"
        label="Название*"
        placeholder="Добавьте название"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionCourseUpdate"
        label="Описание"
        placeholder="Добавьте описание"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdateCourseForm;
