import { Store } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { writeDataToStorage } from '../../util/localStorage.ts';

export const localStorageSubscriber = (
  store: Store<RootState>,
  schemaVersion: string
) => {
  return () => {
    const listState = store.getState().list;
    writeDataToStorage(listState, schemaVersion);
  };
};
