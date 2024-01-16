import { configureStore } from '@reduxjs/toolkit';
import { viewSlice } from './features';

export const store = configureStore({
 reducer: {
  view: viewSlice.reducer,
 },
});

export type StoreState = ReturnType<typeof store.getState>;
export type ActionState = typeof store.dispatch;
