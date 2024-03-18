import { useNavigate } from 'react-router-dom';
import image from '../../../images/image/NoCourses.png';
import Button from '../../UI/Button/Button';

export default function NoCourses() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  return (
    <section className="bg-backgrnd flex items-center justify-center h-[calc(100vh-112px)] pb-[180px]">
      <div className="flex items-center justify-center flex-col">
        <img className="mt-0 mb-5 mx-0" src={image} alt="Картинка планеты в космосе" />
        <p className="text-center mt-0 mb-5 mx-0 max-w-[330px]">
          Пока у вас нет созданных курсов. Добавьте свой первый курс прямо сейчас!
        </p>
        <div role="none" onClick={() => navigate('/new-course')}>
          {isAdmin && (
            <div className="min-w-[260px]">
              <Button type="button" variant="primary" icon="white">
                Новый курс
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
