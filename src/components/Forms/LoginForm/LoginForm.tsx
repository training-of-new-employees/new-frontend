import { observer } from 'mobx-react-lite';
import { useStores } from '../../../utils/context/root-context-store.ts';
import { LoginSchema } from '../../../utils/validationSchema/ValidLogin.ts';
import RememberMe from '../../RememberMe/RememberMe.tsx';
import FormikContainer from '../../UI/FormElements/FormikContainer/FormikContainer.tsx';
import FormikControl from '../../UI/FormElements/FormikControl/FormikControl.tsx';
import LinkComp from '../../UI/LinkComp/LinkComp.tsx';

const LoginForm = observer(() => {
  const { authState } = useStores();
  const { loginInfo, serverError } = useStores((state) => state.authState);
  const InitialValues = {
    emailLogin: '',
    passwordLogin: '',
    rememberMe: '',
  };

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
      {/* 1 вариант: выводим по статусу подготовленный тест ошибки из стора*/}
      <p className="text-error mx-auto">{loginInfo?.state == 'rejected' && serverError}</p>
      {/* 2 вариант: получаем ошибку с сервера и готовый тест выводим*/}
      {loginInfo?.case({
        pending: () => <div>Loading...</div>,
        rejected: (error) => <p className="text-error mx-auto">{error.response.data.message}</p>,
        fulfilled: () => <div>Успех...</div>,
      })}

      <div className="w-[100%] flex flex-row justify-between my-[16px] pr-[20px]">
        <RememberMe />
        <LinkComp direction="/recovery">Забыли пароль?</LinkComp>
      </div>
    </FormikContainer>
  );
});

export default LoginForm;
