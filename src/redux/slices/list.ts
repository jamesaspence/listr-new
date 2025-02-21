import {
  ActionCreatorWithPayload,
  createSelector,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store.ts';
import {
  getListById,
  getListIndex,
  List,
  listExists,
} from '../../util/list.ts';
import { Nullable } from '../../types';

export interface ListState {
  activeList: string | null;
  lists: List[];
  itemIds: string[];
}

const generateRandomId = uuidv4;

const initialState: ListState = {
  activeList: null,
  lists: [],
  itemIds: [],
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

      let id = generateRandomId();

      while (state.itemIds.includes(id)) {
        id = generateRandomId();
      }

      state.lists[listIndex].items.push({
        id,
        text,
        checked: false,
      });
      state.itemIds.push(id);
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
    deleteList: (state, action: PayloadAction<string>) => {
      const listId = action.payload;

      if (!listExists(listId, state.lists)) {
        return state;
      }

      if (state.activeList === listId) {
        state.activeList = state.lists[0]?.id || null;
      }
      state.lists = state.lists.filter(({ id }) => id !== listId);
    },
    setActiveList: (state, action: PayloadAction<string>) => {
      const listId = action.payload;

      if (!listExists(listId, state.lists)) {
        return state;
      }

      state.activeList = listId;
    },
    toggleItem: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const { listId, itemId } = action.payload;

      const listIndex = getListIndex(listId, state.lists);

      if (listIndex === null) {
        return state;
      }

      const itemIndex = state.lists[listIndex].items.findIndex(
        ({ id }) => id === itemId
      );

      if (itemIndex == null) {
        return state;
      }

      state.lists[listIndex].items[itemIndex].checked =
        !state.lists[listIndex].items[itemIndex].checked;
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

    const activeList = getListById(activeListId, lists);

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
  deleteList: ActionCreatorWithPayload<string>;
  toggleItem: ActionCreatorWithPayload<{ listId: string; itemId: string }>;
};

export const {
  addItem,
  removeItem,
  addList,
  setActiveList,
  renameList,
  deleteList,
  toggleItem,
}: ListActions = listSlice.actions as ListActions;

export default listSlice.reducer;
