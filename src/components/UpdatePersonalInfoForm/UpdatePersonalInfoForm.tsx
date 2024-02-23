import FormikContainer from '../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdatePersonalInfoForm() {
  const InitialValues = {
    name: '',
    surname: '',
    patronimic: '',
    company: '',
    email: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.email) {
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
      buttonText="Сохранить изменения"
    >
      <FormikControl
        control="input"
        type="text"
        inputName="surname"
        placeholder="Фамилия"
        options={[]}
      />
      <FormikControl control="input" type="text" inputName="name" placeholder="Имя" options={[]} />
      <FormikControl
        control="input"
        type="text"
        inputName="patronimic"
        placeholder="Отчество"
        options={[]}
      />
      <FormikControl
        control="input"
        type="text"
        inputName="company"
        placeholder="Компания"
        options={[]}
      />
      <FormikControl
        control="input"
        type="email"
        inputName="email"
        placeholder="E-mail"
        options={[]}
      />
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;
