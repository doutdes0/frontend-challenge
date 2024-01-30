import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catSlice";

export const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
