import { catnipThrower } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type APIRes = {
  data: {
    id: string;
    url: string;
    width: number;
    height: number;
    breeds?: [];
  }[];
};

export const getCats = createAsyncThunk("meow", async (_, thunkAPI) => {
  try {
    const res = await catnipThrower.get<any, APIRes>("");
    const data = res.data.map((cat) => cat.url);
    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return thunkAPI.rejectWithValue(e.response?.data.msg);
    } else {
      return thunkAPI.rejectWithValue(e);
    }
  }
});
