import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import listSliceReducer from './slices/list';
import themeSliceReducer from './slices/theme.ts';
import {
  getDataFromStorage,
  getThemeFromStorage,
} from '../util/localStorage.ts';
import { localStorageSubscriber } from './subscribers/localStorage.ts';

const devToolEnvironments = ['local', 'test', 'staging'];

const listData = getDataFromStorage();
const currentTheme = getThemeFromStorage();

export const store = configureStore({
  reducer: {
    list: listSliceReducer,
    theme: themeSliceReducer,
  },
  preloadedState: {
    theme: {
      currentTheme: currentTheme || 'dark',
    },
    ...(listData !== null
      ? {
          list: listData,
        }
      : {}),
  },
  devTools: devToolEnvironments.includes(import.meta.env.VITE_APP_ENV),
} as ConfigureStoreOptions);

const schemaVersion = '1.0.0';
store.subscribe(localStorageSubscriber(store, schemaVersion));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
