import React from 'react';
import UpdatePersonalInfoForm from '../../../components/Forms/UpdatePersonalInfoForm/UpdatePersonalInfoForm';
import { Popup } from '../../../components/UI/Popup/Popup';

interface IPopupEditProfile {
  isOpened?: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupIsEditProfile({ isOpened, setIsOpened }: IPopupEditProfile) {
  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
      <div className="pt-[40px] pr-[40px] pl-[40px] pb-[60px]">
        <UpdatePersonalInfoForm />
      </div>
    </Popup>
  );
}
