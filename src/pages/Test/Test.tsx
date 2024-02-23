import ConfirmationCodeForm from '../../components/ConfirmationCodeForm/ConfirmationCodeForm.tsx';
import FirstEnterForm from '../../components/FirstEnterForm/FirstEnterForm.tsx';
import LoginForm from '../../components/LoginForm/LoginForm.tsx';
import PasswordRecoveryForm from '../../components/PasswordRecoveryForm/PasswordRecoveryForm.tsx';
import RegisterForm from '../../components/RegisterForm/RegisterForm.tsx';
import UpdatePersonalInfoForm from '../../components/UpdatePersonalInfoForm/UpdatePersonalInfoForm.tsx';

function Test() {
  return (
    <div>
      <h1>Testing page</h1>
      <p>1) Регистрация</p>
      <RegisterForm />
      <p>2) Логин</p>
      <LoginForm />
      <p>3) Первый вход пользователя</p>
      <FirstEnterForm />
      <p>4) Восстановление пароля</p>
      <PasswordRecoveryForm />
      <p>5) Код подтверждения</p>
      <ConfirmationCodeForm />
      <p>6) Обновление профиля</p>
      <UpdatePersonalInfoForm />
      {/*<p>7) Добавить курс</p>*/}
      {/*<p>8) Обновить курс</p>*/}
      {/*<p>9) Добавить урок</p>*/}
      {/*<p>10) Добавить фото</p>*/}
      {/*<p>11) Обновить урок</p>*/}
      {/*<p>12) Добавить пользователя</p>*/}
      {/*<p>13) Обновить пользователя</p>*/}
      {/*<p>14) Добавить роль</p>*/}
      {/*<p>15) Назначить курсы на роль</p>*/}
      {/*<p>16) Обновить роль</p>*/}
    </div>
  );
}

export default Test;
