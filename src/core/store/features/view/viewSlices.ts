import { createSlice } from '@reduxjs/toolkit';
import type { viewSliceModel } from '@/src/core/models';

const initialState: viewSliceModel = {};

export const viewSlice = createSlice({
 name: 'view',
 initialState,
 reducers: {},
});

export const {} = viewSlice.actions;
