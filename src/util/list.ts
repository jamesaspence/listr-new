import { Nullable } from '../types';

export interface ListItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface List {
  id: string;
  name: string;
  items: ListItem[];
}

export const getListById = (listId: string, lists: List[]): Nullable<List> => {
  const index = getListIndex(listId, lists);

  if (index === null) {
    return null;
  }

  return lists[index];
};

export const getListIndex = (listId: string, lists: List[]): Nullable<number> =>
  lists.findIndex(({ id }) => listId === id) || null;
