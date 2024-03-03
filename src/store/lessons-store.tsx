import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { createCourse } from '../utils/axios/Admin/coursesAdmin/createCourse';
import { editCourses } from '../utils/axios/Admin/coursesAdmin/editCourses';
import { getCourseByIdForAdmin } from '../utils/axios/Admin/coursesAdmin/getCourseById';
import { editLessonsForEmployee } from '../utils/axios/employee/editLessonsForEmployee';
import { getCoursesForEmployee } from '../utils/axios/employee/getCoursesForUser';
import { getLessonsForEmployee } from '../utils/axios/employee/getLessonsForEmployee';
import { ICourses } from '../utils/axios/types/coursesType';
import { IEditLessons } from '../utils/axios/types/lessonsType';
import { getDataLessonsByIdForEmployee } from '../utils/axios/employee/getLessonsDataForEmployee';

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
