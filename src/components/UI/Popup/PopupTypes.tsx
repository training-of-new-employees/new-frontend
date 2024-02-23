import { ReactNode } from 'react';

export interface IPopup {
  children: ReactNode;
  isOpened?: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
