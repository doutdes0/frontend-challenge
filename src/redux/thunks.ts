import { catnipThrower } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCats = createAsyncThunk("meow", async (_, thunkAPI) => {
  try {
    return await catnipThrower.get<any, string[]>("");
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return thunkAPI.rejectWithValue(e.response?.data.msg);
    } else {
      return thunkAPI.rejectWithValue(e);
    }
  }
});
