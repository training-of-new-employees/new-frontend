import { FC, useEffect } from 'react';
import { IPopup } from './PopupTypes';

export const Popup: FC<IPopup> = ({ children, isOpened, setIsOpened }) => {
  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = (evt) => {
    if (evt.target === evt.currentTarget) {
      setIsOpened(false);
    }
  };
  useEffect(() => {
    const handleEscClick = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        setIsOpened(false);
      }
    };

    document.addEventListener('keydown', handleEscClick);

    return () => document.removeEventListener('keydown', handleEscClick);
  }, []);
  return (
    <div
      onClick={handleOverlayClick}
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
