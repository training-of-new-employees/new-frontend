import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getProfileMe } from '../utils/api/profileApi';
import { editAdminInfo } from '../utils/axios/Admin/editAdminInfo/editAdminInfo';
import { IUser } from '../utils/axios/types/IUser';

class ProfileStore {
  //TODO: Написать типизацию для профиля
  profile?: IPromiseBasedObservable<IUser>;
  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  getProfileAction = () => {
    //TODO: Внутри fromPromise Тот же самый try/catch
    this.profile = fromPromise(getProfileMe());
    //     try {
    //       this.isLoading = true;
    //       const res = await getProfileMe();
    //       runInAction(() => {
    //         this.profile = res;
    //         this.isLoading = false;
    //       });
    //     } catch {
    //       this.isLoading = false;
    //       console.log('ошибка загрузки профиля');
    //     }
  };
  postEditProfileAction = ({ company_name, email, name, patronymic, surname, id }: IUser) => {
    this.profile = fromPromise(
      editAdminInfo({ company_name, email, name, patronymic, surname, id })
    );
  };
}

export default new ProfileStore();
