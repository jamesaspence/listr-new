import {
  ActionCreatorWithPayload,
  createSelector,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store.ts';
import { getListIndex, List, listExists } from '../../util/list.ts';
import { Nullable } from '../../types';

export interface ListState {
  activeList: string | null;
  lists: List[];
}

const generateRandomId = uuidv4;

const initialState: ListState = {
  activeList: null,
  lists: [],
};

export const listSlice = createSlice<ListState, SliceCaseReducers<ListState>>({
  name: 'lists',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ listId: string; text: string }>
    ) => {
      const { listId, text } = action.payload;

      const listIndex = getListIndex(listId, state.lists);

      if (listIndex === null) {
        return state;
      }

      const list = state.lists[listIndex];
      let id = generateRandomId();

      while (list.items.find(({ id: itemId }) => itemId === id)) {
        id = generateRandomId();
      }

      state.lists[listIndex].items.push({
        id,
        text,
        checked: false,
      });
    },
    updateListName: (
      state,
      action: PayloadAction<{ listId: string; name: string }>
    ) => {
      const { listId, name } = action.payload;

      const listIndex = getListIndex(listId, state.lists);

      if (listIndex === null) {
        return state;
      }

      state.lists[listIndex].name = name;
    },
    removeItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const { listId, itemId } = action.payload;

      const listIndex = getListIndex(listId, state.lists);

      if (listIndex === null) {
        return state;
      }

      state.lists[listIndex].items = state.lists[listIndex].items.filter(
        ({ id }) => id !== itemId
      );
    },
    addList: (state, action: PayloadAction<string>) => {
      let listId = generateRandomId();

      while (state.lists.find(({ id }) => id === listId)) {
        listId = generateRandomId();
      }

      state.lists.push({
        id: listId,
        name: action.payload,
        items: [],
      });
      state.activeList = listId;
    },
    renameList: (
      state,
      action: PayloadAction<{ listId: string; name: string }>
    ) => {
      const { listId, name } = action.payload;

      const listIndex = getListIndex(listId, state.lists);

      if (listIndex === null) {
        return state;
      }

      state.lists[listIndex].name = name;
    },
    setActiveList: (state, action: PayloadAction<string>) => {
      const listId = action.payload;

      if (!listExists(listId, state.lists)) {
        return state;
      }

      state.activeList = listId;
    },
  },
});

// Selectors

export const selectActiveListId = (state: RootState): Nullable<string> =>
  state.list.activeList;

export const selectLists = (state: RootState) => state.list.lists;

export const selectActiveList = createSelector(
  [selectActiveListId, selectLists],
  (activeListId, lists) => {
    if (activeListId === null) {
      return null;
    }

    const activeList = lists.find(list => list.id === activeListId);

    if (activeList == null) {
      return null;
    }

    return activeList;
  }
);

type ListActions = {
  addItem: ActionCreatorWithPayload<{ listId: string; text: string }>;
  removeItem: ActionCreatorWithPayload<{ listId: string; itemId: string }>;
  addList: ActionCreatorWithPayload<string>;
  setActiveList: ActionCreatorWithPayload<string>;
  renameList: ActionCreatorWithPayload<{ listId: string; name: string }>;
};

export const {
  addItem,
  removeItem,
  addList,
  setActiveList,
  renameList,
}: ListActions = listSlice.actions as ListActions;

export default listSlice.reducer;
