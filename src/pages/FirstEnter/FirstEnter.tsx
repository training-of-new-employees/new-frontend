import FirstEnterForm from '../../components/Forms/FirstEnterForm/FirstEnterForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormsHeader/FormsHeader.tsx';

export default function FirstEnter() {
  return (
    <>
      <FormsHeader title="Войти" subtitle="Придумайте пароль, чтобы войти" />
      <FirstEnterForm />
      <Button variant="primary" formName="FirstEnter" type="submit">
        Войти
      </Button>
    </>
  );
}
