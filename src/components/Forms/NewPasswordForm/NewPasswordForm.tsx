// import { useState } from 'react';
import FormikContainer from '../../UI/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormikControl/FormikControl.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function NewPasswordForm() {
  // const [serverError, setServerError] = useState('');

  const InitialValues = {
    emailNewPass: '',
    passwordNewPass: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.emailNewPass) {
      errors.emailNewPass = 'Required';
    }
    if (!values.passwordNewPass) {
      errors.passwordNewPass = 'Required';
    }
    return errors;
  };
  const onSubmit = (values: object) => console.log('Form data', values, 'test');
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="NewPassword"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emaiNewPass"
        placeholder="E-mail"
        options={[]}
      />
      <FormikControl
        control="input"
        type="passwordLogin"
        inputName="passwordNewPass"
        placeholder="Пароль"
        isPassword
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
    </FormikContainer>
  );
}

export default NewPasswordForm;
