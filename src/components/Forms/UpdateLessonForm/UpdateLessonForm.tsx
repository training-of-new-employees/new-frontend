// @TODO прокинуть значения в initial values при клике на конкретный урок, поле для ссылки отображать только если нет картинок

// import { useState } from 'react';
import { UpdateLessonSchema } from '../../../utils/validationSchema/ValidUpdateLesson.ts';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

function UpdateLessonForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    nameUpdateLesson: '',
    descriptionUpdateLesson: '',
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Schema={UpdateLessonSchema}
      onSubmit={onSubmit}
      formName="updateLesson"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="nameUpdateLesson"
        label="Название"
        placeholder="Название урока"
        options={[]}
      />
      <FormikControl
        control="textarea"
        type="text"
        inputName="descriptionUpdateLesson"
        placeholder="Содержание урока"
        label="Текст"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdateLessonForm;
