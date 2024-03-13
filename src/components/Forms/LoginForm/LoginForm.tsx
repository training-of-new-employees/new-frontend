// import { useState } from 'react';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const LoginForm = () => {
  // const [serverError, setServerError] = useState('sample of server error');
  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };
  const onSubmit = (values: any) => {
    console.log('Form data', values);
  };
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      formName="PasswordRecovery"
      Schema={LoginSchema}
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
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
};

export default LoginForm;
