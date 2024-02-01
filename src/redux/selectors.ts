import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectCats = (state: RootState) => state.cats;

export const selectCatsValues = createSelector(selectCats, (cats) =>
  Object.values(cats)
);
export const selectFavoriteCats = createSelector(selectCats, (cats) => {
  const values = Object.values(cats);
  const favorites = values.filter((cat) => cat.isLiked);
  return favorites;
});
