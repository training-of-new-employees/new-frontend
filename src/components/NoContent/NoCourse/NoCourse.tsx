import { useNavigate } from 'react-router-dom';
import image from '../../../images/image/NoCourses.png';
import Button from '../../UI/Button/Button';

export default function NoCourses() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  return (
    <section className="bg-backgrnd flex items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img className="mt-0 mb-5 mx-0" src={image} alt="Картинка планеты в космосе" />
        <p className="text-base mt-0 mb-5 mx-0">
          Пока у вас нет созданных курсов. Добавьте свой первый курс прямо сейчас!
        </p>
        <div role="none" onClick={() => navigate('/courses/new-courses')}>
          {isAdmin && (
            <Button type="button" variant="primary" icon="white">
              Создать курс
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
