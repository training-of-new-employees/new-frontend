import React from 'react';
import UpdatePersonalInfoForm from '../../../components/Forms/UpdatePersonalInfoForm/UpdatePersonalInfoForm';
import { Popup } from '../../../components/UI/Popup/Popup';
import { useStores } from '../../../utils/context/root-context-store';

interface IPopupEditProfile {
  isOpened?: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupIsEditProfile({ isOpened, setIsOpened }: IPopupEditProfile) {
  const { profile } = useStores((state) => state.profileState);

  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
      <div className="pt-[40px] pr-[40px] pl-[40px] pb-[60px] w-[820px]">
        <h2 className="mb-[32px] flex justify-center font-[600] text-[32px] exo2 line-[24px]">
          Редактирование основной информации
        </h2>
        {profile?.case({
          pending: () => <div>Loading...</div>,
          rejected: (error) => <div>{error.response.data.message}</div>,
          fulfilled: () => <UpdatePersonalInfoForm />,
        })}
      </div>
    </Popup>
  );
}
