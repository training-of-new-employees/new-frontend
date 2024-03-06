// @TODO прокинуть значения в initial values при клике на конкретный урок, поле для ссылки отображать только если нет картинок

// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateLessonForm() {
  const InitialValues = {
    nameUpdateLesson: '',
    descriptionUpdateLesson: '',
  };

  const Validation = (values: ValuesTypes) => {
    // const [serverError, setServerError] = useState('sample of server error');
    const errors: ValuesTypes = {};
    if (!values.nameUpdateLesson) {
      errors.nameUpdateLesson = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
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
