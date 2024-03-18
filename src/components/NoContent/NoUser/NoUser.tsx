import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import image from '../../../images/image/NoUser.png';
import { useStores } from '../../../utils/context/root-context-store.ts';
import Button from '../../UI/Button/Button';

const NoUser = observer(() => {
  const navigate = useNavigate();
  const { storage } = useStores((state) => state.authState);
  const isAdmin = storage.getItem('role') === 'ADMIN';
  return (
    <section className="bg-backgrnd flex items-center justify-center">
      <div className="flex items-center justify-center w-[1200px] flex-col">
        <img className="mt-0 mb-5 mx-0" src={image} alt="Картинка гриба" />
        <p className="text-base mt-0 mb-5 mx-0">
          Пока у вас нет сотрудников. Добавьте свою команду для обучения новому!
        </p>
        <div
          role="none"
          onClick={() => {
            navigate('/users/new-user');
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
});

export default NoUser;
