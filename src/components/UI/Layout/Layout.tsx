import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { ILayout } from './LayoutTypes';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export const Layout: FC<ILayout> = ({ role }) => {
  return (
    <>
      <Header role={role} />
      <div className="flex">
        <SideBar role={role} />
        <Outlet />
      </div>
    </>
  );
};
