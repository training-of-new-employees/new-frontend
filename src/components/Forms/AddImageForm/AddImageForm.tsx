import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function AddImageForm() {
  const InitialValues = {
    link: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.link) {
      errors.link = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Загрузить изображение"
    >
      <FormikControl
        control="input"
        type="link"
        inputName="link"
        placeholder="https://"
        options={[]}
      />
    </FormikContainer>
  );
}

export default AddImageForm;
