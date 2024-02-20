import { createContext, useContext } from 'react';
import RootStories from '../../store/RootStores';

export const RootStoriesContext = createContext<RootStories | null>(null);

export const useStores = () => {
  const context = useContext(RootStoriesContext);

  if (context === null) {
    throw Error('стор пустой');
  }

  return context;
};
