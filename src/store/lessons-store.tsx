import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { editLessonsForEmployee } from '../utils/axios/employee/editLessonsForEmployee';
import { getDataLessonsByIdForEmployee } from '../utils/axios/employee/getLessonsDataForEmployee';
import { getLessonsForEmployee } from '../utils/axios/employee/getLessonsForEmployee';
import { IEditLessons } from '../utils/axios/types/lessonsType';

class LessonsStore {
  lessons?: IPromiseBasedObservable<any[]>;
  lesson?: IPromiseBasedObservable<any>;
  lessonId?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }

  getLessonsForEmployeeAction = (id: string) => {
    this.lessons = fromPromise(getDataLessonsByIdForEmployee(id));
  };

  postEditLessonsForEmployee = ({ name, content, url_picture, archived, id }: IEditLessons) => {
    this.lessonId = fromPromise(
      editLessonsForEmployee({ name, content, url_picture, archived, id })
    );
  };

  getLessonByIdAction = (id: string) => {
    this.lessonId = fromPromise(getLessonsForEmployee(id));
  };
}

export default new LessonsStore();
