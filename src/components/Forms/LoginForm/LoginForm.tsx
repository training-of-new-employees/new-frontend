import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const LoginForm = observer(() => {
  const { loginAction, loginInfo, serverError } = useStores((state) => state.authState);
  const navigate = useNavigate();
  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };

  useEffect(() => {
    loginInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => console.log('error'),
      fulfilled: () => navigate('/profile'),
    });
  }, [loginInfo?.state]);

  const onSubmit = (values: any) => {
    loginAction({ email: values.emailLogin, password: values.passwordLogin });
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
      <p className="text-error mx-auto">{loginInfo?.state == 'rejected' && serverError}</p>
      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
});

export default LoginForm;
