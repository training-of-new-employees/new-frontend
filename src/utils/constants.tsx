import Archive from '../images/UI/archive.svg';
import Exit from '../images/UI/Exit.svg';
import Pencil from '../images/UI/pencil.svg';
import Courses from '../images/UI/SideBar/Courses.svg';
import Users from '../images/UI/SideBar/Employees.svg';
import Work from '../images/UI/SideBar/Work.svg';
import User from '../images/UI/User.svg';

export const CardMenu: {
  id: number;
  image: string;
  text: string;
}[] = [
  { id: 1, image: Pencil, text: 'Редактировать' },
  { id: 2, image: Archive, text: 'Перенести в архив' },
];
export const HEADER_DD_MENU: {
  id: number;
  image: string;
  text: string;
}[] = [
  { id: 0, image: User, text: 'В профиль' },
  { id: 1, image: Exit, text: 'Выйти' },
];

export const COURSE_TABLE: {
  id: number;
  name: string;
  job: string;
  status: string;
}[] = [
  {
    id: 1,
    name: 'Основные принципы и ценности компании',
    job: 'Вы',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 2,
    name: 'Основные принципы и ценности компании',
    job: 'Вы',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 3,
    name: 'Основные принципы и ценности компании',
    job: 'Вы',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 4,
    name: 'Основные принципы и ценности компании',
    job: 'Вы',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 5,
    name: 'Основные принципы и ценности компании',
    job: 'Вы',
    status: 'Авторизован или не авторизован',
  },
];

export const PERSONAL_TABLE: {
  id: number;
  name: string;
  job: string;
  status: string;
}[] = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 2,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 3,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 4,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 5,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
  {
    id: 6,
    name: 'Иванов Иван Иванович',
    job: 'Резчик стекла',
    status: 'Авторизован или не авторизован',
  },
];

export const SIDEBAR_MENU_ADMIN: {
  id: number;
  text: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    text: 'Курсы',
    image: Courses,
    link: '/courses',
  },
  {
    id: 2,
    text: 'Пользователи',
    image: Users,
    link: '/users',
  },
  {
    id: 3,
    text: 'Должности',
    image: Work,
    link: '/position',
  },
];

export const SIDEBAR_MENU_PERSONAL: {
  id: number;
  text: string;
  image: string;
  link: string;
}[] = [
  {
    id: 1,
    text: 'Курсы',
    image: Courses,
    link: '/courses',
  },
];
