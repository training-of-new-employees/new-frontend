import { FC } from 'react';
import { WrapperForAddForm } from '../../../components/UI/WrapperForAddForm/WrapperForAddForm';
import AddNewUser from '../../../widgets/AddNewUser/AddNewUser';

export const CreateUser: FC = () => {
  return (
    <WrapperForAddForm>
      <div className="w-[79%] px-[60px] bg-white pt-[40px] pb-[60px] rounded-b-[24px]">
        <AddNewUser />
      </div>
    </WrapperForAddForm>
  );
};
