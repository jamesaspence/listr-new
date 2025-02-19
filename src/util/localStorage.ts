import { Nullable } from '../types';
import { ListState } from '../redux/slices/list.ts';
import { ThemeName } from '../redux/slices/theme.ts';

export const LISTS_STORAGE_KEY = 'listr__state--list';
export const THEME_STORAGE_KEY = 'listr__theme';

type SerializedState = {
  list: ListState;
  version: string;
};

export const getLocalStorage = () => window.localStorage;

export const getRawData = (): Nullable<string> => {
  return getLocalStorage().getItem(LISTS_STORAGE_KEY) || null;
};

export const getDataFromStorage = (): Nullable<ListState> => {
  const data = getRawData();
  if (data === null) {
    return null;
  }

  const { list } = JSON.parse(data as string) as SerializedState;

  return list;
};

export const getThemeFromStorage = (): Nullable<ThemeName> => {
  return getLocalStorage().getItem(THEME_STORAGE_KEY) as Nullable<ThemeName>;
};

export const hasStoredData = (): boolean => {
  return getRawData() != null;
};

export const writeDataToStorage = (
  listState: ListState,
  schemaVersion: string
) => {
  getLocalStorage().setItem(
    LISTS_STORAGE_KEY,
    JSON.stringify({
      version: schemaVersion,
      list: listState,
    })
  );
};

export const writeThemeToStorage = (theme: ThemeName) => {
  getLocalStorage().setItem(THEME_STORAGE_KEY, theme);
};

export const clearData = () => {
  getLocalStorage().removeItem(LISTS_STORAGE_KEY);
  getLocalStorage().removeItem(THEME_STORAGE_KEY);
};
