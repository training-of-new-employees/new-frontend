import AddCourseForm from '../../components/Forms/AddCourseForm/AddCourseForm.tsx';
import AddImageForm from '../../components/Forms/AddImageForm/AddImageForm.tsx';
import AddLessonForm from '../../components/Forms/AddLessonForm/AddLessonForm.tsx';
import AddNewPositionForm from '../../components/Forms/AddNewPositionForm/AddNewPositionForm.tsx';
import AddNewUserForm from '../../components/Forms/AddNewUserForm/AddNewUserForm.tsx';
import ConfirmationCodeForm from '../../components/Forms/ConfirmationCodeForm/ConfirmationCodeForm.tsx';
import FirstEnterForm from '../../components/Forms/FirstEnterForm/FirstEnterForm.tsx';
import LoginForm from '../../components/Forms/LoginForm/LoginForm.tsx';
import RecoveryForm from '../../components/Forms/RecoveryForm/RecoveryForm.tsx';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.tsx';
import SetCoursesForm from '../../components/Forms/SetCoursesForm/SetCoursesForm.tsx';
import UpdateCourseForm from '../../components/Forms/UpdateCourseForm/UpdateCourseForm.tsx';
import UpdateLessonForm from '../../components/Forms/UpdateLessonForm/UpdateLessonForm.tsx';
import UpdatePersonalInfoForm from '../../components/Forms/UpdatePersonalInfoForm/UpdatePersonalInfoForm.tsx';
import UpdatePositionForm from '../../components/Forms/UpdatePositionForm/UpdatePositionForm.tsx';
import UpdateUserForm from '../../components/Forms/UpdateUserForm/UpdateUserForm.tsx';

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
      <RecoveryForm />
      <p>5) Код подтверждения</p>
      <ConfirmationCodeForm />
      <p>6) Обновление профиля</p>
      <UpdatePersonalInfoForm />
      <p>7) Добавить курс</p>
      <AddCourseForm />
      <p>8) Обновить курс</p>F
      <UpdateCourseForm />
      <p>9) Добавить урок</p>
      <AddLessonForm />
      <p>10) Добавить фото</p>
      <AddImageForm />
      <p>11) Обновить урок</p>
      <UpdateLessonForm />
      <p>12) Добавить пользователя</p>
      <AddNewUserForm />
      <p>13) Обновить пользователя</p>
      <UpdateUserForm />
      <p>14) Добавить роль</p>
      <AddNewPositionForm />
      <p>15) Назначить курсы на роль</p>
      <SetCoursesForm />
      <p>16) Обновить роль</p>
      <UpdatePositionForm />
    </div>
  );
}

export default Test;
