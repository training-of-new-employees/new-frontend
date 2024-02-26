// @TODO прокинуть значения в initial values при клике на конкретный урок, поле для ссылки отображать только если нет картинок

import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateLessonForm() {
  const InitialValues = {
    name: '',
    description: '',
    link: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Сохранить изменения"
    >
      <FormikControl
        control="input"
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
      <FormikControl
        control="input"
        type="link"
        inputName="link"
        placeholder="https://"
        label="Изображение"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdateLessonForm;
