// import { useState } from 'react';
import { AddCourseSchema } from '../../../utils/validationSchema/ValidAddCourse.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function AddCourseForm() {
  // const [serverError, setServerError] = useState('sample of server error');

  const InitialValues = {
    nameCourse: '',
    descriptionCourse: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddCourseSchema}
      onSubmit={onSubmit}
      formName="addCourse"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameCourse"
        placeholder="Добавьте название"
        label="Название*"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionCourse"
        placeholder="Добавьте описание"
        label="Описание"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddCourseForm;
