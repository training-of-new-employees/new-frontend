import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { IPopupArchive } from './PopupArchiveTypes';
import CoursesStore from '../../store/courses-store';
import employeeStore from '../../store/employee-store';
import PositionStore from '../../store/position-store';
import Button from '../UI/Button/Button';
import { Popup } from '../UI/Popup/Popup';

export const PopupArchive: FC<IPopupArchive> = observer(
  ({ isOpened, setIsOpened, id, setMenuOpened }) => {
    const { addPositionToArchive } = PositionStore;
    const { addToArchiveCourses } = CoursesStore;
    const { addEmployeeToArchive } = employeeStore;
    const location = useLocation().pathname;
    function addCardToArchive() {
      setIsOpened(false);
      setMenuOpened(false);
      if (location === '/position') {
        addPositionToArchive(id);
      }
      if (location === '/courses') {
        addToArchiveCourses(id);
      } else addEmployeeToArchive(id);
    }
    return (
      <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
        <h2 className="text-h2 font-semibold pt-[40px]">
          Перенос{' '}
          {location === '/courses' ? 'курса' : location === '/users' ? 'пользователя' : 'должности'}{' '}
          в архив
        </h2>
        <p className="text-h4 pt-[30px] block max-w-[85%] text-center">
          При переносе
          {location === '/courses'
            ? ' курса в архив, курс станет не доступен для прохождения'
            : location === '/users'
              ? ' в архив пользователь утратит доступ к системе'
              : ' в архив пользователи в должности утратят доступ к системе'}
        </p>
        <div className="pt-[35px] flex gap-[25px] pb-[60px] w-[89%]">
          <div className="min-w-[260px]">
            <Button type="button" variant="emptyBorder" onClick={() => setIsOpened(false)}>
              Отменить
            </Button>
          </div>
          <div className="min-w-[260px]">
            <Button type="button" variant="primary" onClick={() => addCardToArchive()}>
              В архив
            </Button>
          </div>
        </div>
      </Popup>
    );
  }
);
