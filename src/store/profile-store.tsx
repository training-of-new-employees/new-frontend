import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getProfileMe, renameProfile } from '../utils/api/profileApi';
// import { editAdminInfo } from '../utils/axios/Admin/editAdminInfo/editAdminInfo';
// import { IUser } from '../utils/axios/types/IUser';

class ProfileStore {
  //TODO: Написать типизацию для профиля
  profile?: IPromiseBasedObservable<any>;
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  getProfileAction = () => {
    this.profile = fromPromise(getProfileMe());
  };
  postEditProfileAction = (data: any) => {
    this.profile = fromPromise(renameProfile(data));

    //todo: запрос через axios не работает почему то
    // this.profile = fromPromise(
    //   editAdminInfo({ company_name, email, name, patronymic, surname, id })
    // );
  };
}

export default new ProfileStore();
