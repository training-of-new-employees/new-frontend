import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../assets/icon/Back-Icon.svg';
import ConfirmationCodeForm from '../../components/Forms/ConfirmationCodeForm/ConfirmationCodeForm.tsx';
import Button from '../../components/UI/Button/Button.tsx';
import FormsHeader from '../../components/UI/FormElements/FormsHeader/FormsHeader.tsx';
import LinkComp from '../../components/UI/LinkComp/LinkComp.tsx';

const ConfirmationCode = () => {
  const navigate = useNavigate();
  return (
    <>
      <FormsHeader
        title="Подверждение e-mail"
        subtitle="Мы отправили вам на e-mail 4х значный код"
        subtitle2="Введите код для подверждения e-mail"
      />
      <ConfirmationCodeForm />
      <div className="flex flex-row justify-between items-center mt-[26px] mb-[10px] w-[100%]">
        <LinkComp direction="" onClick={() => navigate(-1)}>
          <div className="flex flex-row gap-[10px]">
            <img src={arrowLeft} alt="<-" />
            <p>Назад</p>
          </div>
        </LinkComp>
        <div>
          <Button variant="empty" type="button">
            Отправить код повторно
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationCode;
