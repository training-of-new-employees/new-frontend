import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ILayout } from './LayoutTypes';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export const Layout: FC<ILayout> = ({ role }) => {
  return (
    <>
      <Header />
      <div className="flex bg-backgrnd ">
        <SideBar role={role} />
        <Outlet />
      </div>
    </>
  );
};
