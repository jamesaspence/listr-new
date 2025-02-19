import { Store } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import {
  writeDataToStorage,
  writeThemeToStorage,
} from '../../util/localStorage.ts';

export const localStorageSubscriber = (
  store: Store<RootState>,
  schemaVersion: string
) => {
  return () => {
    const listState = store.getState().list;
    const themeState = store.getState().theme;
    writeDataToStorage(listState, schemaVersion);
    writeThemeToStorage(themeState.currentTheme);
  };
};
