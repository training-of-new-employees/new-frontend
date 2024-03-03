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
    const request = fromPromise(fetchCourses());
    this.courses = request.value;
  };
}

export default new CoursesStore();
