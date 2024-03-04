import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddCourseForm() {
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
      buttonText="Добавить курс"
    >
      <FormikControl
        control="input"
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
    </FormikContainer>
  );
}

export default AddCourseForm;
