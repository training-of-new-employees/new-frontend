import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { fetchCourses } from '../utils/api/coursesApi';

class CoursesStore {
  //todo: сделать типы
  courses?: IPromiseBasedObservable<any>;

  constructor() {
    makeAutoObservable(this);
  }

  getCoursesAction = () => {
    this.courses = fromPromise(fetchCourses());
  };
}

export default new CoursesStore();
