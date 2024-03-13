import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { IPopupArchive } from './PopupArchiveTypes';
import CoursesStore from '../../store/courses-store';
import PositionStore from '../../store/position-store';
import Button from '../UI/Button/Button';
import { Popup } from '../UI/Popup/Popup';

export const PopupArchive: FC<IPopupArchive> = observer(
  ({ isOpened, setIsOpened, id, setMenuOpened }) => {
    const { addPositionToArchive } = PositionStore;
    const { addToArchiveCourses } = CoursesStore;
    const location = useLocation().pathname;
    function addCardToArchive() {
      setIsOpened(false);
      setMenuOpened(false);
      if (location === '/position') {
        addPositionToArchive(id);
      }
      if (location === '/courses') {
        addToArchiveCourses(id);
      }
    }
    return (
      <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
        <h2 className="text-h2 font-semibold pt-[40px]">Перенос должности в архив</h2>
        <p className="text-h4 pt-[30px] block max-w-[85%]">
          При переносе в архив пользователи в должности утратят доступ к&nbsp;системе
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
