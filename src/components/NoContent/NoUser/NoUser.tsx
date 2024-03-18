import { useNavigate } from 'react-router-dom';
import image from '../../../images/image/NoUser.png';
import Button from '../../UI/Button/Button';

export default function NoUser() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('role') === 'ADMIN';
  return (
    <section className="bg-backgrnd flex items-center justify-center h-[calc(100vh-112px)] pb-[180px]">
      <div className="flex items-center justify-center flex-col">
        <img className="mt-0 mb-5 mx-0" src={image} alt="Картинка гриба" />
        <p className="text-base mt-0 mb-5 mx-0">
          Пока у вас нет сотрудников. Добавьте свою команду для обучения новому!
        </p>
        <div
          role="none"
          onClick={() => {
            navigate('/new-user');
          }}
        >
          {isAdmin && (
            <Button variant="primary" icon="white">
              Новый сотрудник
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
