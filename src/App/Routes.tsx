import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { Layout } from '../components/UI/Layout/Layout';
import { LayoutAuth } from '../components/UI/LayoutAuth/LayoutAuth.tsx';
import Courses from '../pages/Courses/Courses';
import CreateCourse from '../pages/Courses/CreateCourse/CreateCourse.tsx';
import EditCourse from '../pages/Courses/EditCourse/EditCourse.tsx';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
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
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default router;
