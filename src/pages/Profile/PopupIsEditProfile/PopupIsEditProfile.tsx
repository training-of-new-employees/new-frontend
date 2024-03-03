import React from 'react';
import UpdateUserForm from '../../../components/Forms/UpdateUserForm/UpdateUserForm';
import { Popup } from '../../../components/UI/Popup/Popup';

interface IPopupEditProfile {
  isOpened?: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupIsEditProfile({ isOpened, setIsOpened }: IPopupEditProfile) {
  return (
    <Popup isOpened={isOpened} setIsOpened={setIsOpened}>
      <UpdateUserForm />
    </Popup>
  );
}
