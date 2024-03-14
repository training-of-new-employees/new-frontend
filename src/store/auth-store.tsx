import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { login } from '../utils/axios/apiAuth/login';
import { registration } from '../utils/axios/apiAuth/registrationAdmin';
import { resetPassword } from '../utils/axios/apiAuth/resetPassword';
import { verifyEmail } from '../utils/axios/apiAuth/verifyEmail';
import { IAuth } from '../utils/axios/types/typeAuth';

class AuthStore {
  registerInfo?: IPromiseBasedObservable<any>;
  verifyEmailInfo?: IPromiseBasedObservable<any>;
  resetPasswordInfo?: IPromiseBasedObservable<any>;
  loginInfo?: IPromiseBasedObservable<any> = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  loginAction = ({ email, password }: IAuth) => {
    this.loginInfo = fromPromise(login({ email, password }));
    return this.loginInfo;
  };

  registrationAction = ({ email, password, company_name }: IAuth) => {
    this.registerInfo = fromPromise(registration({ email, password, company_name }));
  };

  verifyEmailAction = (code: string) => {
    this.verifyEmailInfo = fromPromise(verifyEmail(code));
  };

  resetPasswordAction = ({ email }: { email: string }) => {
    this.resetPasswordInfo = fromPromise(resetPassword({ email }));
  };
}

export default new AuthStore();
