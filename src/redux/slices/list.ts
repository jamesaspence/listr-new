import {
  createSelector,
  createSlice,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../store.ts';
import { getListIndex, List } from '../../util/list.ts';

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
  },
});

// Selectors
export const selectActiveList = (state: RootState) => state.list.activeList;
export const selectLists = (state: RootState) => state.list.lists;
export const selectListNames = createSelector(selectLists, lists =>
  lists.map(({ name }) => name)
);

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
