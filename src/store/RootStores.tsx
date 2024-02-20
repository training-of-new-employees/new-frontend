import coursesStore from './courses-store';
import profileStore from './profile-store';

class RootStories {
  profileState = profileStore;
  coursesState = coursesStore;
}

export default RootStories;
