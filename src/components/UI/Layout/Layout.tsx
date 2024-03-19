import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
// import { SideBar } from '../SideBar/SideBar';
import { SideBarAllLessons } from '../SideBar/SideBarAllLessons/SideBarAllLessons';
// import { SideBarNewCourse } from '../SideBar/SideBarNewCourse/SideBarNewCourse';
// import { SideBarNewLesson } from '../SideBar/SideBarNewLesson/SideBarNewLesson';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="flex bg-backgrnd">
        {/* <SideBar /> */}
        {/* <SideBarNewCourse /> */}
        {/* <SideBarNewLesson /> */}
        <SideBarAllLessons />
        <Outlet />
      </div>
    </>
  );
};
