import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function ConfirmationCodeForm() {
  const InitialValues = {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.number1) {
      errors.email = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      buttonText="Отправить новый пароль"
    >
      <FormikControl control="input" type="text" inputName="number1" placeholder="1" options={[]} />
      <FormikControl control="input" type="text" inputName="number2" placeholder="2" options={[]} />
      <FormikControl control="input" type="text" inputName="number3" placeholder="3" options={[]} />
      <FormikControl control="input" type="text" inputName="number4" placeholder="4" options={[]} />
    </FormikContainer>
  );
}

export default ConfirmationCodeForm;
