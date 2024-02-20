import { configureStore, combineReducers } from "@reduxjs/toolkit";
import catsReducer from "./catSlice";

const rootReducer = combineReducers({
  cats: catsReducer,
});

//Confiure store every time a test runs
export const setUpStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore["dispatch"];

// export const store = configureStore({
//   reducer: {
//     cats: catsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
