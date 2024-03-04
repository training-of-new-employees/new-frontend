import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdatePersonalInfoForm() {
  const InitialValues = {
    name: '',
    surname: '',
    patronymic: '',
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
      <FormikControl control="input" type="text" inputName="surname" label="Фамилия" options={[]} />
      <FormikControl control="input" type="text" inputName="name" label="Имя" options={[]} />
      <FormikControl
        control="input"
        type="text"
        inputName="patronymic"
        label="Отчество"
        options={[]}
      />
      <FormikControl
        control="input"
        type="text"
        inputName="company"
        label="Компания"
        options={[]}
      />
      <FormikControl control="input" type="email" inputName="email" label="E-mail" options={[]} />
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;
