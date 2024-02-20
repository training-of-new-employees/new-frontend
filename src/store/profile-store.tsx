import { makeAutoObservable, runInAction } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getProfileMe } from '../utils/api/profileApi';

class ProfileStore {
  //TODO: Написать типизацию для профиля
  profile?: IPromiseBasedObservable<any>;
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
}

export default new ProfileStore();
