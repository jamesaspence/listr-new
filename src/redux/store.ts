import { configureStore } from '@reduxjs/toolkit';
import listSliceReducer from './slices/list';

const devToolEnvironments = ['local', 'test', 'staging'];

export const store = configureStore({
  reducer: {
    list: listSliceReducer,
  },
  devTools: devToolEnvironments.includes(import.meta.env.VITE_APP_ENV),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
