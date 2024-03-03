import React, { FC } from 'react';
import PopupIsEditProfile from './PopupIsEditProfile/PopupIsEditProfile';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile: FC = () => {
  const isRole = localStorage.getItem('role') ? localStorage.getItem('role') : 'ADMIN';
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickPopupEdit = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <ProfileInfo isRole={isRole} onEditProfileClick={handleClickPopupEdit} />
      <PopupIsEditProfile isOpened={open} setIsOpened={setOpen} />
    </div>
  );
};
