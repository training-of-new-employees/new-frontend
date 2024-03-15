import React from 'react';
import PopupIsEditProfile from './PopupIsEditProfile/PopupIsEditProfile';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import authStore from '../../store/auth-store';
import profileStore from '../../store/profile-store';
import { useStores } from '../../utils/context/root-context-store';

export const Profile: React.FC = () => {
  const isRole = localStorage.getItem('role') ? localStorage.getItem('role') : 'ADMIN';
  const [open, setOpen] = React.useState<boolean>(false);
  const { profile } = useStores((state) => state.profileState);

  const handleClickPopupEdit = () => {
    setOpen((prev) => !prev);
  };

  const initAuthMok = authStore;
  const initProfile = profileStore;

  React.useEffect(() => {
    initProfile.getProfileAction();
    initAuthMok.loginAction({
      email: 'testtesttest.test.tt.t.e@gmail.com',
      password: '1234gD!a',
    });
  }, []);

  //todo: придумать лоадер для загрузки данных
  return (
    <div className="flex flex-col items-center w-full">
      {profile?.value && <ProfileInfo isRole={isRole} onEditProfileClick={handleClickPopupEdit} />}
      {profile?.value && <PopupIsEditProfile isOpened={open} setIsOpened={setOpen} />}
    </div>
  );
};
