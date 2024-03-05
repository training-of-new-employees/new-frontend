import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddLessonForm() {
  const InitialValues = {
    name: '',
    description: '',
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
      buttonText="Добавить урок"
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
    </FormikContainer>
  );
}

export default AddLessonForm;
