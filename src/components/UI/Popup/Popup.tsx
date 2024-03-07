import { FC } from 'react';
import { IPopup } from './PopupTypes';

export const Popup: FC<IPopup> = ({ children, isOpened, setIsOpened }) => {
  return (
    <div
      onClick={() => setIsOpened(false)}
      className={
        isOpened
          ? 'visible fixed items-center justify-center flex z-15 h-[100vh] w-[100vw] bg-[#2C2E2C66] top-0 left-0'
          : 'invisible fixed items-center justify-center flex z-15 h-[100vh] w-[100vw] bg-[#2C2E2C66] top-0 left-0'
      }
    >
      <div className="min-w-[620px] bg-white absolute my-0 mx-[auto] rounded-[24px] flex flex-col items-center">
        <button
          onClick={() => setIsOpened(false)}
          className="bg-exit-icon bg-[length:13px_13px] bg-center bg-no-repeat min-w-[20px] h-[20px] absolute top-[20px] right-[18px]"
        />
        {children}
      </div>
    </div>
  );
};
