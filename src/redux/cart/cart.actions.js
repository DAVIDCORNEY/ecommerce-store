import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const removeSingleItem = item => ({
  type: cartActionTypes.REMOVE_SINGLE_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});
