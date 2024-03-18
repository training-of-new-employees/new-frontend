import { useStores } from '../context/root-context-store.ts';

export const removeToken = (): void => {
  const { storage } = useStores((state) => state.authState);

  storage.removeItem('tokenKey');
};
