// import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const LoginForm = observer(() => {
  // const [serverError, setServerError] = useState();
  const { authState } = useStores();
  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };

  const onSubmit = (values: any) => {
    authState
      .loginAction({ email: values.emailLogin, password: values.passwordLogin })
      .then((res) => console.log(res));

    //     .case({
    //   pending: () => setServerError('loading'),
    //   rejected: (error) => setServerError(error),
    //   fulfilled: (value) => {
    //     setServerError('success');
    //     console.log(value);
    //   },
    // });
    console.log(authState.loginInfo);
    console.log(authState.loginInfo?.state);
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
});

export default LoginForm;
