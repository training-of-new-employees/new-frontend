import { FC } from 'react';
import Preloader from '../../images/UI/preloader-profile.png';

export const PreloaderProfile: FC = () => {
  return (
    <div className="fixed top-[160px] bg-white rounded-[24px] border-solid border-[1px] border-backgrnd max-w-[620px] right-[calc(50%-310px)]">
      <img className="rounded-[24px]" src={Preloader} alt="Космос" />
      <h2 className="text-h2 font-semibold pt-[7px] pb-[38px] text-center">
        Вы успешно вошли в аккаунт!
      </h2>
    </div>
  );
};
