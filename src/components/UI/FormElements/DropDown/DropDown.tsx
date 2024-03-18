import { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import { IDropDown } from './DropDownTypes.tsx';
import coursesStore from '../../../../store/courses-store.tsx';
import employeeStore from '../../../../store/employee-store.tsx';
import positionStore from '../../../../store/position-store.tsx';
import { PopupArchive } from '../../../PopupArchive/PopupArchive.tsx';

export const DropDown: FC<IDropDown> = observer(({ menu, id, setMenuOpened }) => {
  const { rearchiveEmployee } = employeeStore;
  const { rearchiveCourse } = coursesStore;
  const { rearchivePosition } = positionStore;
  const location = useLocation().pathname;
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [popupName, setPopupName] = useState('');
  const navigate = useNavigate();
  function openPopup(text: string) {
    switch (text) {
      case 'Редактировать':
        if (location === '/position') {
          navigate(`/position/${id}`);
        }
        break;
      case 'Перенести в архив':
        setIsPopupOpened(true);
        setPopupName('archive');
        break;
      case 'Вернуть из архива':
        setMenuOpened(false);
        if (location === '/courses') {
          rearchiveCourse(id);
        }
        if (location === '/position') {
          rearchivePosition(id);
        }
        if (location === '/users') {
          rearchiveEmployee(id);
        }
        break;
    }
  }
  return (
    <div className="z-10 absolute top-[40px] min-w-[235px] pt-[6px] pb-[10px] bg-white right-0 w-[auto] rounded-[16px] shadow-[1px_1px_1.5px_1.5px_rgba(47,48,46,0.08)]">
      {menu.map((i) => {
        return (
          <button
            key={i.id}
            className="py-[8px] w-[100%] flex hover:bg-sidebarHoveredBtn rounded-[16px] pr-[10px] "
            onClick={() => openPopup(i.text)}
          >
            <img className="mx-[15px] w-[20px]" src={i.image} />
            <h4 className="text-h4 text-left text-black">{i.text}</h4>
          </button>
        );
      })}
      {popupName === 'archive' ? (
        <PopupArchive
          id={id}
          isOpened={isPopupOpened}
          setMenuOpened={setMenuOpened}
          setIsOpened={setIsPopupOpened}
        />
      ) : (
        ''
      )}
    </div>
  );
});
