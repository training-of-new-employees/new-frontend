import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import Courses from '../pages/Courses/Courses';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Positions from '../pages/Positions/Positions';
import Profile from '../pages/Profile/Profile';
import Regestration from '../pages/Registration/Regestration';
import Test from '../pages/Test/Test.tsx';

const router = createBrowserRouter([
  {
    path: paths.main,
    element: <Main />,
  },
  {
    path: paths.profile,
    element: <Profile />,
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: paths.registration,
    element: <Regestration />,
  },
  {
    path: paths.courses,
    element: <Courses />,
  },
  {
    path: paths.positions,
    element: <Positions />,
  },
  {
    path: '/test',
    element: <Test />,
  },
]);

export default router;
