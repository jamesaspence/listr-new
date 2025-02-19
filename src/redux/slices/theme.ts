import {
  ActionCreatorWithPayload,
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

export type ThemeName = 'dark' | 'light';

export interface ThemeState {
  currentTheme: ThemeName;
}

const initialState: ThemeState = {
  currentTheme: 'dark',
};

export const themeSlice = createSlice<
  ThemeState,
  SliceCaseReducers<ThemeState>
>({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<{ theme: ThemeName }>) => {
      state.currentTheme = action.payload.theme;
    },
  },
});

export const selectCurrentTheme = (state: RootState): ThemeName =>
  state.theme.currentTheme;

type ThemeActions = {
  changeTheme: ActionCreatorWithPayload<{ theme: ThemeName }>;
};

export const { changeTheme }: ThemeActions = themeSlice.actions as ThemeActions;

export default themeSlice.reducer;
