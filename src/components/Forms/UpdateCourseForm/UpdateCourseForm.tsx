// @TODO прокинуть значения в initial values при клике на конкретный урок

import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdateCourseForm() {
  const InitialValues = {
    name: 'Some name',
    description: 'Some text',
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
      <FormikControl control="input" type="text" inputName="name" label="Название*" options={[]} />
      <FormikControl
        control="textarea"
        type="text"
        inputName="description"
        label="Описание"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdateCourseForm;
