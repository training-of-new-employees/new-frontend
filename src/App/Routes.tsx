import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { SideBar } from '../components/UI/SideBar/SideBar';
import Courses from '../pages/Courses/Courses';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Positions from '../pages/Positions/Positions';
import { Profile } from '../pages/Profile/Profile';
import Regestration from '../pages/Registration/Regestration';
import Users from '../pages/Users/Users';

const router = createBrowserRouter([
  {
    path: paths.main,
    element: <Main />,
  },
  {
    element: <SideBar role="admin" />,
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
    path: paths.login,
    element: <Login />,
  },
  {
    path: paths.registration,
    element: <Regestration />,
  },
]);

export default router;
