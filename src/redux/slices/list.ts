import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

const generateRandomId = () =>

const initialState: ListState = {
  activeList: 'list-12345',
  lists: {
    'list-12345': {
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
      action: PayloadAction<{ listId: string; newItem: string; }>
    ) => {
      const { listId, newItem } = action.payload;

      if (!state.lists[listId]) {
        return state;
      }

      let id =

      state.lists[listId].items.push({

      });
    },
  },
});
