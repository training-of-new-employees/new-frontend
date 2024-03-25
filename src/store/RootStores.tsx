import { makeAutoObservable } from 'mobx';
import authStore from './auth-store';
import coursesStore from './courses-store';
import employeeStore from './employee-store';
import lessonsStore from './lessons-store';
import positionStore from './position-store';
import profileStore from './profile-store';

class RootStores {
  profileState = profileStore;
  coursesState = coursesStore;
  employeeState = employeeStore;
  positionState = positionStore;
  lessonsState = lessonsStore;
  authState = authStore;

  constructor() {
    makeAutoObservable(this);
  }
}

export default RootStores;
