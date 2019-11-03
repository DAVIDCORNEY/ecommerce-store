import { createSelector } from "reselect";

const selector = state => state.shop;

export const selectCollections = createSelector(
  [selector],
  shop => shop.collections
);
