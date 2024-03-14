import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const LoginForm = observer(() => {
  const [serverError, setServerError] = useState(null);
  const { authState } = useStores();
  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };

  useEffect(() => {
    authState.loginInfo?.case({
      pending: () => console.log('Loading'),
      rejected: (error) => {
        console.log(error.message);
        setServerError(error.message);
        setTimeout(() => {
          setServerError(null);
        }, 8000);
      },
      fulfilled: (value) => console.log(value),
    });
  }, [authState.loginInfo?.state]);

  const onSubmit = (values: any) => {
    authState
      .loginAction({ email: values.emailLogin, password: values.passwordLogin })
      .then((res) => console.log(res));
    console.log('Login info', authState.loginInfo);
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
      <p className="text-error mx-auto">{serverError}</p>
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
});

export default LoginForm;
