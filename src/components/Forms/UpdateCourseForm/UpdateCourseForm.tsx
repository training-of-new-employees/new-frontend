// @TODO прокинуть значения в initial values при клике на конкретный урок
// import { useState } from 'react';

import { AddCourseSchema } from '../../../utils/validationSchema/ValidAddCourse.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function UpdateCourseForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameCourse: 'Some name',
    descriptionCourse: 'Some text',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddCourseSchema}
      onSubmit={onSubmit}
      formName="updateCourse"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameCourse"
        label="Название*"
        placeholder="Добавьте название"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionCourse"
        label="Описание"
        placeholder="Добавьте описание"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdateCourseForm;
