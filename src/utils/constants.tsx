import Archive from '../images/UI/archive.svg';
import Pencil from '../images/UI/pencil.svg';

export const CardMenu: {
  id: number;
  image: string;
  text: string;
}[] = [
  { id: 1, image: Pencil, text: 'Редактировать' },
  { id: 2, image: Archive, text: 'Перенести в архив' },
];
