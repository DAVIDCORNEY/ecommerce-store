import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //here we get local storage from window browser

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root", //the point at which we start storing everything
  storage,
  whitelist: ["cart"] //the reducer we want to persist. User is handled by firebase.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
