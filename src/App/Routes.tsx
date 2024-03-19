import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { LayoutAuth } from '../components/UI/FormElements/LayoutAuth/LayoutAuth.tsx';
import { Layout } from '../components/UI/Layout/Layout';
import ConfirmationCode from '../pages/ConfirmationCode/ConfirmationCode.tsx';
import Courses from '../pages/Courses/Courses';
import CreateCourse from '../pages/Courses/CreateCourse/CreateCourse.tsx';
import EditCourse from '../pages/Courses/EditCourse/EditCourse.tsx';
import FirstEnter from '../pages/FirstEnter/FirstEnter.tsx';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import NewPassword from '../pages/NewPassword/NewPassword.tsx';
import { NotFound } from '../pages/NotFound/NotFound.tsx';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery.tsx';
import { CreatePosition } from '../pages/Positions/CreatePosition/CreatePosition.tsx';
import { EditPosition } from '../pages/Positions/EditPosition/EditPosition.tsx';
import { Positions } from '../pages/Positions/Positions';
import { Profile } from '../pages/Profile/Profile';
import Registration from '../pages/Registration/Regestration';
import Test from '../pages/Test/Test.tsx';
import { CreateUser } from '../pages/Users/CreateUser/CreateUser.tsx';
import { EditUser } from '../pages/Users/EditUser/EditUser.tsx';
import { Users } from '../pages/Users/Users';

const router = createBrowserRouter([
  {
    path: paths.main,
    element: <Main />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: paths.profile,
        element: <Profile />,
      },
      {
        path: paths.courses,
        element: <Courses />,
      },
      {
        path: paths.newcourse,
        element: <CreateCourse />,
      },
      {
        path: paths.editcourse,
        element: <EditCourse />,
      },
      {
        path: paths.users,
        element: <Users />,
      },
      {
        path: paths.positions,
        element: <Positions />,
      },
      {
        path: paths.newposition,
        element: <CreatePosition />,
      },
      {
        path: paths.newcourse,
        element: <CreateCourse />,
      },
      {
        path: paths.newuser,
        element: <CreateUser />,
      },
      {
        path: paths.edituser,
        element: <EditUser />,
      },
      {
        path: paths.editposition,
        element: <EditPosition />,
      },
    ],
  },
  {
    element: <LayoutAuth />,
    children: [
      {
        path: paths.registration,
        element: <Registration />,
      },
      {
        path: paths.login,
        element: <Login />,
      },
      {
        path: paths.firstenter,
        element: <FirstEnter />,
      },
      {
        path: paths.recovery,
        element: <PasswordRecovery />,
      },
      {
        path: paths.newpass,
        element: <NewPassword />,
      },
      {
        path: paths.otp,
        element: <ConfirmationCode />,
      },
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
