// import { useState } from 'react';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function UpdatePersonalInfoForm() {
  // const [serverError, setServerError] = useState('sample of server error');

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
      formName="updatePersonalInfo"
    >
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="surname"
        label="Фамилия"
        placeholder="Введите фамилию"
        small
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="name"
        label="Имя"
        placeholder="Введите имя"
        small
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="patronymic"
        label="Отчество"
        placeholder="Введите отчество"
        small
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="text"
        inputName="company"
        label="Компания"
        placeholder="Введите компанию"
        options={[]}
      />
      <FormikControl
        control="inputClassic"
        type="email"
        inputName="email"
        label="E-mail"
        placeholder="Введите e-mail"
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default UpdatePersonalInfoForm;
