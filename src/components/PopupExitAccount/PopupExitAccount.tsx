import { FC } from 'react';
import { IPopupExitAccount } from './PopupExitAccoutTypes';
import Button from '../UI/Button/Button';
import { Popup } from '../UI/Popup/Popup';

export const PopupExitAccount: FC<IPopupExitAccount> = ({ isOpened, setIsOpened }) => {
  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
      <h2 className="text-h2 font-semibold pt-[40px]">Выход из аккаунта</h2>
      <p className="text-h4 pt-[30px]">Вы уверены, что хотите выйти из аккаунта?</p>
      <div className="pt-[35px] flex gap-[25px] pb-[60px] w-[89%]">
        <div className="min-w-[260px]">
          <Button onClick={() => setIsOpened(false)} type="button" variant="emptyBorder">
            Отменить
          </Button>
        </div>
        <div className="min-w-[260px]">
          <Button type="button" variant="primary">
            Выйти
          </Button>
        </div>
      </div>
    </Popup>
  );
};
