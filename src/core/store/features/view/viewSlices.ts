import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { viewSliceModel } from '@/src/core/models';

const initialState: viewSliceModel = {
 currentLanguage: 'es',
};

export const viewSlice = createSlice({
 name: 'view',
 initialState,
 reducers: {
  setCurrentLanguage: (state, action: PayloadAction<string>) => {
   state.currentLanguage = action.payload;
  },
 },
});

export const { setCurrentLanguage } = viewSlice.actions;
