import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
//import { getAllUsers } from "../thunks";

interface CatsState {
  [id: string]: {
    id: string;
    url: string;
    isLiked: boolean;
  };
}

const initialState: CatsState = {};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    toggle_like: (state, action: PayloadAction<string>) => {
      state[action.payload].isLiked = !state[action.payload].isLiked;
    },
  },
});

export default catsSlice.reducer;
