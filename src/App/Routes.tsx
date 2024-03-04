import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { Layout } from '../components/UI/Layout/Layout';
import { LayoutAuth } from '../components/UI/LayoutAuth/LayoutAuth.tsx';
import ConfirmationCode from '../pages/ConfirmationCode/ConfirmationCode.tsx';
import Courses from '../pages/Courses/Courses';
import FirstEnter from '../pages/FirstEnter/FirstEnter.tsx';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import NewPassword from '../pages/NewPassword/NewPassword.tsx';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery.tsx';
import Positions from '../pages/Positions/Positions';
import { Profile } from '../pages/Profile/Profile';
import Regestration from '../pages/Registration/Regestration';
import Test from '../pages/Test/Test.tsx';
import Users from '../pages/Users/Users';

const router = createBrowserRouter([
  {
    path: paths.main,
    element: <Main />,
  },
  {
    element: <Layout role="user" />,
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
        path: paths.users,
        element: <Users />,
      },
      {
        path: paths.positions,
        element: <Positions />,
      },
    ],
  },
  {
    element: <LayoutAuth />,
    children: [
      {
        path: paths.registration,
        element: <Regestration />,
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
        path: paths.code,
        element: <ConfirmationCode />,
      },
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default router;
