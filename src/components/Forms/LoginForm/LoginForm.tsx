// import { useState } from 'react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

function LoginForm() {
  // const [serverError, setServerError] = useState('sample of server error');

  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };
  const onSubmit = (values: object) => console.log('Form data', values);
  return (
    <FormikContainer
      InitialValues={InitialValues}
      onSubmit={onSubmit}
      formName="PasswordRecovery"
      Schema={toFormikValidationSchema(LoginSchema)}
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
      <div className="w-[416px] flex flex-row justify-between mt-[26px] mb-[10px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
}

export default LoginForm;
