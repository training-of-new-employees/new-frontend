export interface IPopupArchive {
  isOpened?: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
}
