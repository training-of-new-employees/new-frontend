import LoginForm from '../../components/Forms/LoginForm/LoginForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormElements/FormsHeader/FormsHeader.tsx';
import OrAction from '../../components/UI/FormElements/OrAction/OrAction.tsx';

export default function Login() {
  return (
    <>
      <FormsHeader title="Войти" subtitle="Введите e-mail и пароль, чтобы войти" />
      <LoginForm />
      <Button variant="primary" formName="PasswordRecovery" type="submit">
        Войти
      </Button>
      <OrAction direction="/registration">Зарегистрироваться</OrAction>
    </>
  );
}
