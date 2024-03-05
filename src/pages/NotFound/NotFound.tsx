import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import { Header } from '../../components/UI/Header/Header';
import NotFoundImg from '../../images/image/404.png';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-backgrnd flex flex-col h-screen">
      <Header />
      <div className="flex flex-col self-center items-center h-[calc(100vh-72px)] justify-center gap-[20px] mb-[65px]">
        <img className="max-w-[465px]" src={NotFoundImg} alt="Ошибка 404" />
        <p className="font-sans">
          Упс, похоже эта страница отправилась в космическое путешествие...
        </p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Вернуться на главную
        </Button>
      </div>
    </section>
  );
};
