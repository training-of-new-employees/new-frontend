import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormsHeader/FormsHeader.tsx';
import OrAction from '../../components/UI/OrAction/OrAction.tsx';

export default function Regestration() {
  return (
    <>
      <FormsHeader
        title="Регистрация"
        subtitle="Введите e-mail и пароль, чтобы зарегистрироваться"
      />
      <RegisterForm />
      <Button variant="primary" formName="Registration" type="submit">
        Зарегистрироваться
      </Button>
      <OrAction direction="/login">Войти</OrAction>
    </>
  );
}
