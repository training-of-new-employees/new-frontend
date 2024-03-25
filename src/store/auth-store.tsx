import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { firstEnter } from '../utils/axios/apiAuth/firstEnter.tsx';
import { login } from '../utils/axios/apiAuth/login';
import { registration } from '../utils/axios/apiAuth/registrationAdmin';
import { resetPassword } from '../utils/axios/apiAuth/resetPassword';
import { verifyEmail } from '../utils/axios/apiAuth/verifyEmail';
import { IAuth, IFirstEnter } from '../utils/axios/types/typeAuth';

class AuthStore {
  registerInfo?: IPromiseBasedObservable<any> = undefined;
  verifyEmailInfo?: IPromiseBasedObservable<any> = undefined;
  resetPasswordInfo?: IPromiseBasedObservable<any> = undefined;
  loginInfo?: IPromiseBasedObservable<any> = undefined;
  firstEnterInfo?: IPromiseBasedObservable<any> = undefined;
  serverError: string = '';
  storage: Storage = sessionStorage;
  recoveryEmail: string = 'test@ya.ru';

  constructor() {
    makeAutoObservable(this);
  }

  loginAction = ({ email, password }: IAuth) => {
    this.loginInfo = fromPromise(login({ email, password }));
    return this.loginInfo;
  };

  registrationAction = ({ email, password, company_name }: IAuth) => {
    this.registerInfo = fromPromise(registration({ email, password, company_name }));
    return this.registerInfo;
  };

  verifyEmailAction = (code: string) => {
    this.verifyEmailInfo = fromPromise(verifyEmail(code));
    return this.verifyEmailInfo;
  };

  resetPasswordAction = ({ email }: { email: string }) => {
    this.resetPasswordInfo = fromPromise(resetPassword({ email }));
    return this.resetPasswordInfo;
  };

  firstEnterAction = ({ email, invite, password }: IFirstEnter) => {
    this.firstEnterInfo = fromPromise(firstEnter({ email, invite, password }));
    return this.firstEnterInfo;
  };

  serverErrorAction = (error: string) => {
    this.serverError = error;
  };

  storageAction = (tick: string) => {
    this.storage = tick ? localStorage : sessionStorage;
    localStorage.setItem('tick', tick);
  };

  recoveryEmailAction = (email: string) => {
    this.recoveryEmail = email;
  };
}

export default new AuthStore();
