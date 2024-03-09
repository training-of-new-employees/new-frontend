// import { useState } from 'react';
import { AddLessonSchema } from '../../../utils/validationSchema/ValidAddLesson.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function AddLessonForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    name: '',
    description: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={AddLessonSchema}
      onSubmit={onSubmit}
      formName="addLesson"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="name"
        placeholder="Название урока"
        label="Название"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="description"
        placeholder="Содержание урока"
        label="Текст"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default AddLessonForm;
