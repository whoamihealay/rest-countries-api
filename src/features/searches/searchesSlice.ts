import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  status: string;
}

const initialState: IInitialState = {
  status: "",
};

export const searchesSlice = createSlice({
  name: "searches",
  initialState,
  reducers: {
    reset(state) {
      state.status = "";
    },
    statusSearchChanged(state, action) {
      state.status = action.payload;
    },
  },
});

export const { statusSearchChanged } = searchesSlice.actions;

export default searchesSlice.reducer;
