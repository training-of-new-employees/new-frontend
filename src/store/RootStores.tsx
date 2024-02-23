import { makeAutoObservable } from 'mobx';
import coursesStore from './courses-store';
import profileStore from './profile-store';

class RootStories {
  profileState = profileStore;
  coursesState = coursesStore;

  constructor() {
    makeAutoObservable(this);
  }
}

export default RootStories;
