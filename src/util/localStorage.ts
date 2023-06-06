import { Nullable } from '../types';
import { ListState } from '../redux/slices/list.ts';

export const LISTS_STORAGE_KEY = 'listr__state--list';

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

export const clearData = () => {
  getLocalStorage().removeItem(LISTS_STORAGE_KEY);
};
