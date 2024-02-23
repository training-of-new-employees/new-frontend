import { createContext, useContext } from 'react';
import RootStories from '../../store/RootStores';

export const RootStoriesContext = createContext<RootStories | null>(null);

export function useStores(): RootStories;
export function useStores<Result>(selector: (value: RootStories) => Result): Result;

export function useStores<Result>(selector?: (value: RootStories) => Result) {
  const context = useContext(RootStoriesContext);

  if (context === null) {
    throw Error('стор пустой');
  }

  if (typeof selector === 'function') {
    return selector(context);
  }

  return context;
}
