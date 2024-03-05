// import { useState } from 'react';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function LoginForm() {
  // const [serverError, setServerError] = useState('sample of server error');

  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.emailLogin) {
      errors.emailLogin = 'Required';
    }
    if (!values.passwordLogin) {
      errors.passwordLogin = 'Required';
    }
    return errors;
  };
  const onSubmit = (values: object) => console.log('Form data', values, 'test');
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="PasswordRecovery"
    >
      <FormikControl
        control="input"
        type="email"
        inputName="emailLogin"
        placeholder="E-mail"
        options={[]}
      />
      <FormikControl
        control="input"
        type="passwordLogin"
        inputName="passwordLogin"
        placeholder="Пароль"
        isPassword
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
      <div className="flex flex-row justify-between mt-[26px] mb-[10px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
}

export default LoginForm;
