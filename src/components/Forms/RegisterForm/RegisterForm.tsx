// import { useState } from 'react';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

interface ValuesTypes {
  [key: string]: string | string[];
}

function RegisterForm() {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    company: '',
    email: '',
    password: '',
    repeatPassword: '',
    rememberMe: '',
  };

  const Validation = (values: ValuesTypes) => {
    const errors: ValuesTypes = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const onSubmit = (values: ValuesTypes) => {
    console.log('Form data', values);
  };
  return (
    <FormikContainer
      InitialValues={InitialValues}
      Validation={Validation}
      onSubmit={onSubmit}
      formName="Register"
    >
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
      <FormikControl
        control="input"
        type="password"
        inputName="password"
        placeholder="Пароль"
        isPassword
        options={[]}
      />
      <FormikControl
        control="input"
        type="password"
        inputName="repeatPassword"
        placeholder="Повторите пароль"
        isPassword
        options={[]}
      />
      {/*<p className="text-error mx-auto">{serverError}</p>*/}
      <div className="w-[416px] flex flex-row justify-between mt-[26px] mb-[10px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
}

export default RegisterForm;
