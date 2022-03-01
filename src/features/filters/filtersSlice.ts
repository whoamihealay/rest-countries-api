import { createSlice } from "@reduxjs/toolkit";

export type Filters = {
  All: string;
  Filter: string;
};

interface IInitialState {
  status: string;
}

const initialState: IInitialState = {
  status: "All",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload;
    },
  },
});

export const { statusFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
