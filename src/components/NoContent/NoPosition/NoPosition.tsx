import { useNavigate } from 'react-router-dom';
import image from '../../../images/image/NoPosition.png';
import Button from '../../UI/Button/Button';

export default function NoPositions() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  return (
    <section className="bg-backgrnd flex items-center justify-center h-[calc(100vh-112px)] pb-[40px]">
      <div className="flex items-center justify-center flex-col">
        <img className="mt-0 mb-5 mx-0" src={image} alt="Картинка телескопа" />
        <p className="text-base mt-0 mx-0">Пока у вас нет должностей.</p>
        <p className="text-base mt-0 mb-5 mx-0">
          Добавьте должности для сортировки сотрудников уже сегодня!
        </p>
        <div
          role="none"
          onClick={() => {
            navigate('/new-position');
          }}
        >
          {isAdmin && (
            <div className="min-w-[260px]">
              <Button variant="primary" icon="white">
                Новая должность
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
