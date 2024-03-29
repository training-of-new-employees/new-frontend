import Archive from '../images/UI/archive.svg';
import Copy from '../images/UI/copy-icon.svg';
import Pencil from '../images/UI/pencil.svg';
import ReArchive from '../images/UI/rearchive-icon.svg';
import Send from '../images/UI/send-icon.svg';
import Courses from '../images/UI/SideBar/Courses.svg';
import Materials from '../images/UI/SideBar/create-course-maininfo.svg';
import Users from '../images/UI/SideBar/Employees.svg';
import MainInfoCourse from '../images/UI/SideBar/main-info-course.svg';
import Work from '../images/UI/SideBar/Work.svg';

export const CardMenu: {
  id: number;
  image: string;
  text: string;
}[] = [
  { id: 1, image: Pencil, text: 'Редактировать' },
  { id: 2, image: Archive, text: 'Перенести в архив' },
];

export const PERSONAL_MENU: {
  id: number;
  image: string;
  text: string;
}[] = [
  { id: 1, image: Pencil, text: 'Редактировать' },
  { id: 2, image: Copy, text: 'Копировать ссылку-приглашение' },
  { id: 3, image: Send, text: 'Отправить приглашение повторно' },
  { id: 4, image: Archive, text: 'Перенести в архив' },
];
export const REARCHIVE_DDMENU: {
  id: number;
  image: string;
  text: string;
}[] = [{ id: 1, image: ReArchive, text: 'Вернуть из архива' }];

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

export const SIDEBAR_MENU_CREATECOURSE: {
  id: number;
  text: string;
  image: string;
  link: string;
}[] = [
  { id: 1, text: 'Основная информация', image: MainInfoCourse, link: '/new-course/main-info' },
  { id: 2, text: 'Материалы', image: Materials, link: '/new-course/lessons' },
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

export const POSITIONS_DATA: {
  id: number;
  name: string;
  courses: number;
  personal: number;
}[] = [
  {
    id: 1,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 2,
    name: 'Специалист управления механихации Специалист управления механихации Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 3,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 4,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 5,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 6,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 7,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
  {
    id: 8,
    name: 'Специалист управления механихации',
    courses: 0,
    personal: 0,
  },
];

export const COURSE_DATA: {
  id: number;
  name: string;
  lesson: number;
  status: string;
}[] = [
  { id: 1, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
  { id: 2, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
  { id: 3, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
  { id: 4, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
  { id: 5, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
  { id: 6, name: 'Культура и ценности компании', lesson: 1, status: 'Не начат' },
];
