import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="flex bg-backgrnd ">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};
