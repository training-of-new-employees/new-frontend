import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddNewPositionForm() {
  const InitialValues = {
    position: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.position) {
      errors.position = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Добавить должность"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="position"
        placeholder="Введите название должности"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddNewPositionForm;
