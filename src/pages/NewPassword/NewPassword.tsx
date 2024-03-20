import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/icon/Back-Icon.svg';
import NewPasswordForm from '../../components/Forms/NewPasswordForm/NewPasswordForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormElements/FormsHeader/FormsHeader.tsx';
import LinkComp from '../../components/UI/LinkComp/LinkComp.tsx';
import { useStores } from '../../utils/context/root-context-store.ts';

export const NewPassword = observer(() => {
  const { resetPasswordAction, resetPasswordInfo, recoveryEmail } = useStores(
    (state) => state.authState
  );
  const navigate = useNavigate();

  useEffect(() => {
    resetPasswordInfo?.case({
      pending: () => console.log('loading'),
      rejected: () => console.log('reject'),
      fulfilled: () => console.log('fulfill'),
    });
  }, [resetPasswordInfo?.state]);

  const handleClick = () => {
    resetPasswordAction({ email: recoveryEmail });
  };
  return (
    <>
      <FormsHeader
        title="Пароль отправлен на почту"
        subtitle="Для восстановления доступа к платформе, введите пароль, отправленный вам на почту"
      />
      <NewPasswordForm />
      <Button variant="primary" formName="NewPassword" type="submit">
        Войти
      </Button>
      <div className="flex flex-row justify-between items-center mt-[26px] mb-[10px] w-[100%]">
        <LinkComp direction="" onClick={() => navigate(-1)}>
          <div className="flex flex-row gap-[10px]">
            <img src={arrowLeft} alt="<-" />
            <p>Назад</p>
          </div>
        </LinkComp>
        <div>
          <Button variant="empty" type="button" onClick={handleClick}>
            Отправить пароль повторно
          </Button>
        </div>
      </div>
    </>
  );
});

export default NewPassword;
