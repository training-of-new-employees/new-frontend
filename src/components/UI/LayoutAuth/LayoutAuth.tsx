import { Outlet } from 'react-router-dom';
import AuthBackground from '../../AuthBackground/AuthBackground.tsx';
import Banner from '../../Banner/Banner.tsx';
export const LayoutAuth = () => {
  return (
    <div className="min-h-[100vh]">
      <AuthBackground>
        <Banner />
        <Outlet />
      </AuthBackground>
    </div>
  );
};
