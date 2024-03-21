export interface IDropDown {
  menu: Array<IMenuProps>;
  id: number;
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMenuProps {
  id: number;
  image: string;
  text: string;
}
