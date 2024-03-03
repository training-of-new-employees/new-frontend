import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getProfileMe } from '../utils/api/profileApi';
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
    const request = fromPromise(getProfileMe());
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
    this.profile = request;
  };
}

export default new ProfileStore();
