import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { createCourse } from '../utils/axios/Admin/coursesAdmin/createCourse';
import { editCourses } from '../utils/axios/Admin/coursesAdmin/editCourses';
import { getCourseByIdForAdmin } from '../utils/axios/Admin/coursesAdmin/getCourseById';
import { getCoursesForAdmin } from '../utils/axios/Admin/coursesAdmin/getCourses';
import { getCoursesForEmployee } from '../utils/axios/employee/getCoursesForUser';
import { ICourses } from '../utils/axios/types/coursesType';

class CoursesStore {
  archiveCourses: Array<number> = [];
  courses?: IPromiseBasedObservable<any>;
  course?: IPromiseBasedObservable<any>;
  courseId?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }
  addToArchiveCourses = (id: number) => {
    this.archiveCourses.push(id);
    const isArchived = true;
    this.postCoursesEditAction({ archived: isArchived, id });
  };
  rearchiveCourse = (id: number) => {
    this.archiveCourses.splice(this.archiveCourses.indexOf(id), 1);
  };
  getCoursesAdminAction = () => {
    this.courses = fromPromise(getCoursesForAdmin());
  };
  getCoursesEmployAction = () => {
    this.courses = fromPromise(getCoursesForEmployee());
  };

  postCoursesCreateAction = ({ name, description }: ICourses) => {
    this.course = fromPromise(createCourse({ name, description }));
  };
  postCoursesEditAction = ({ name, description, archived, id }: ICourses) => {
    this.courseId = fromPromise(editCourses({ name, description, archived, id }));
  };

  getCoursesByIdAction = (id: string) => {
    this.courseId = fromPromise(getCourseByIdForAdmin(id));
  };
}

export default new CoursesStore();
