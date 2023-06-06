import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface ListItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface List {
  name: string;
  items: ListItem[];
}

export interface ListState {
  activeList: string;
  lists: { [listId: string]: List };
}

const generateRandomId = uuidv4;

const initialActiveList = generateRandomId();

const initialState: ListState = {
  activeList: initialActiveList,
  lists: {
    [initialActiveList]: {
      name: 'Unnamed List',
      items: [],
    },
  },
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

      if (!state.lists[listId]) {
        return state;
      }

      const list = state.lists[listId];
      let id = generateRandomId();

      while (list.items.find(({ id: itemId }) => itemId === id)) {
        id = generateRandomId();
      }

      state.lists[listId].items.push({
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

      if (!state.lists[listId]) {
        return state;
      }

      state.lists[listId].items = state.lists[listId].items.filter(
        ({ id }) => id !== itemId
      );
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
