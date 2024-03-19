import { FC } from 'react';
import { WrapperForAddForm } from '../../../components/UI/WrapperForAddForm/WrapperForAddForm';
import UpdateUser from '../../../widgets/UpdateUser/UpdateUser';

export const EditUser: FC = () => {
  return (
    <WrapperForAddForm>
      <div className="max-w-[79%] px-[60px] bg-white pt-[40px] pb-[60px] rounded-b-[24px]">
        <UpdateUser />
      </div>
    </WrapperForAddForm>
  );
};
