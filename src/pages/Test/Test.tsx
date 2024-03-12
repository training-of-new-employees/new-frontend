// import AddImageForm from '../../components/Forms/AddImageForm/AddImageForm.tsx';
// import ConfirmationCodeForm from '../../components/Forms/ConfirmationCodeForm/ConfirmationCodeForm.tsx';
// import FirstEnterForm from '../../components/Forms/FirstEnterForm/FirstEnterForm.tsx';
// import LoginForm from '../../components/Forms/LoginForm/LoginForm.tsx';
// import RecoveryForm from '../../components/Forms/RecoveryForm/RecoveryForm.tsx';
// import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.tsx';
// import SetCoursesForm from '../../components/Forms/SetCoursesForm/SetCoursesForm.tsx';
// import UpdateCourseForm from '../../components/Forms/UpdateCourseForm/UpdateCourseForm.tsx';
// import UpdateLessonForm from '../../components/Forms/UpdateLessonForm/UpdateLessonForm.tsx';
// import { PreloaderProfile } from '../../components/PreloaderProfile/PreloaderProfile.tsx';
// import CustomDropdown from '../../components/UI/FormElements/CustomDropdown/CustomDropdown.tsx';
// import FormikCustomDropdown from '../../components/UI/FormElements/FormikCustomDropdown/FormikCustomDropdown.tsx';
// import TestFormikSelect from '../../components/UI/FormElements/TestFormikSelect/TestFormikSelect..tsx';
import AddCourse from '../../widgets/AddCourse/AddCourse.tsx';
import AddLesson from '../../widgets/AddLesson/AddLesson.tsx';
import AddNewUser from '../../widgets/AddNewUser/AddNewUser.tsx';
import AddRole from '../../widgets/AddRole/AddRole.tsx';
import UpdateCourse from '../../widgets/UpdateCourse/UpdateCourse.tsx';
import UpdateLesson from '../../widgets/UpdateLesson/UpdateLesson.tsx';
import UpdatePersonalInfo from '../../widgets/UpdatePersonalInfo/UpdatePersonalInfo.tsx';
import UpdateRole from '../../widgets/UpdateRole/UpdateRole.tsx';
import UpdateUser from '../../widgets/UpdateUser/UpdateUser.tsx';

function Test() {
  return (
    <div>
      {/*<PreloaderProfile />*/}
      <h1>Testing page</h1>
      {/*<FormikCustomDropdown*/}
      {/*  name="testSelect"*/}
      {/*  options={[*/}
      {/*    {*/}
      {/*      label: 'Software Engineer',*/}
      {/*      value: 'Software Engineer',*/}
      {/*    },*/}
      {/*    {*/}
      {/*      label: 'React Developer',*/}
      {/*      value: 'React Developer',*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<TestFormikSelect />*/}
      {/*<p>1) Регистрация</p>*/}
      {/*<RegisterForm />*/}
      {/*<p>2) Логин</p>*/}
      {/*<LoginForm />*/}
      {/*<p>3) Первый вход пользователя</p>*/}
      {/*<FirstEnterForm />*/}
      {/*<p>4) Восстановление пароля</p>*/}
      {/*<RecoveryForm />*/}
      {/*<p>5) Код подтверждения</p>*/}
      {/*<ConfirmationCodeForm />*/}
      <p>6) Обновление профиля</p>
      <div className="w-[748px]">
        <UpdatePersonalInfo />
      </div>
      <p>7) Добавить курс</p>
      <div className="w-[820px]">
        <AddCourse />
      </div>
      <p>8) Обновить курс</p>
      <div className="w-[740px]">
        <UpdateCourse />
      </div>
      <p>9) Добавить урок</p>
      <div className="w-[820px]">
        <AddLesson />
      </div>
      {/*<p>10) Добавить фото</p>*/}
      {/*<AddImageForm />*/}
      <p>11) Обновить урок</p>
      <div className="w-[820px]">
        <UpdateLesson />
      </div>
      <p>12) Добавить пользователя</p>
      <div className="w-[780px]">
        <AddNewUser />
      </div>
      <p>13) Обновить пользователя</p>
      <div className="w-[780px]">
        <UpdateUser />
      </div>
      <p>14) Добавить роль</p>
      <div className="w-[780px]">
        <AddRole />
      </div>
      {/*<p>15) Назначить курсы на роль</p>*/}
      {/*<SetCoursesForm />*/}
      <p>16) Обновить роль</p>
      <div className="w-[780px]">
        <UpdateRole />
      </div>
    </div>
  );
}

export default Test;
