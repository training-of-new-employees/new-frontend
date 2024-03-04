import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/icon/Back-Icon.svg';
import RecoveryForm from '../../components/Forms/RecoveryForm/RecoveryForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormsHeader/FormsHeader.tsx';
import LinkComp from '../../components/UI/LinkComp/LinkComp.tsx';

export default function PasswordRecovery() {
  const navigate = useNavigate();
  return (
    <>
      <FormsHeader
        title="Восстановление пароля"
        subtitle="Для восстановления доступа к платформе, введите e-mail.  Письмо с новым паролем придет к вам на почту"
      />
      <RecoveryForm />
      <Button variant="primary" formName="PasswordRecovery" type="submit">
        Отправить новый пароль
      </Button>
      <div className="flex flex-row justify-center mt-[26px] mb-[10px]">
        <LinkComp direction="" onClick={() => navigate(-1)}>
          <div className="flex flex-row gap-[10px]">
            <img src={arrowLeft} alt="<-" />
            <p>Назад</p>
          </div>
        </LinkComp>
      </div>
    </>
  );
}
