import { FC } from 'react';
import { IWrapperForAddForm } from './WrapperForAddFormTypes';

export const WrapperForAddForm: FC<IWrapperForAddForm> = ({ children }) => {
  return <div className="pt-[72px] flex flex-col items-center w-full ml-[300px]">{children}</div>;
};
