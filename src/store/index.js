import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart";
import authReducer from "./auth";
import uiReducer from "./uiSlice";

const store = configureStore({
 reducer: {
  cart: cartReducer,
  auth: authReducer,
  ui: uiReducer,
 },
});

export default store;