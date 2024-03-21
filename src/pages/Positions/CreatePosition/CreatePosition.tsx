import { FC } from 'react';
import { WrapperForAddForm } from '../../../components/UI/WrapperForAddForm/WrapperForAddForm';
import AddRole from '../../../widgets/AddRole/AddRole';

export const CreatePosition: FC = () => {
  return (
    <WrapperForAddForm>
      <div className="min-w-[79%] px-[60px] bg-white pt-[40px] pb-[60px] rounded-b-[24px]">
        <AddRole />
      </div>
    </WrapperForAddForm>
  );
};
