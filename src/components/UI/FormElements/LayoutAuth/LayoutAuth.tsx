import { Outlet } from 'react-router-dom';
import AuthBackground from '../../../AuthBackground/AuthBackground.tsx';
import Banner from '../../../Banner/Banner.tsx';
import FormLayout from '../FormLayout/FormLayout.tsx';
export const LayoutAuth = () => {
  return (
    <div>
      <AuthBackground>
        <Banner />
        <FormLayout>
          <Outlet />
        </FormLayout>
      </AuthBackground>
    </div>
  );
};
