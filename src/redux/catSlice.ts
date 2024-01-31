import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { getCats } from "./thunks";
import { v4 as uuidv4 } from "uuid";

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
  extraReducers: (builder) => {
    builder.addCase(
      getCats.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        action.payload.map((url) => {
          const id = uuidv4();
          state[id] = {
            id,
            url,
            isLiked: false,
          };
        });
      }
    );
  },
});

export default catsSlice.reducer;
