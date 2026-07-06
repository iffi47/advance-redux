import {createSlice} from "@reduxjs/toolkit";

const initialState = { totalAmount: 0, items: [], totalQuantity: 0 };

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addItemToCart(state, action) {
   const newItem = action.payload;
   const existingItem = state.items.find((item) => item.id === newItem.id);
   if (!existingItem) {
    state.items.push({
     itemId: newItem.id,
     price: newItem.price,
     quantity: newItem.quantity,
     totalPrice: newItem.price,
     name: newItem.title,
    });
   } else {
    existingItem.quantity++;
    existingItem.totatPrice = existingItem.totalPrice + newItem.price;
   }
  },
  removeItemFromCart(state, action) {
   const id = action.payload;
   const existingItem = state.items.find((item) => item.id === id);
   if (existingItem.quantity === 1) {
    state.items = state.items.filter((item) => item.id !== id);
   } else {
    existingItem.quantity--;
    existingItem.totatPrice = existingItem.totalPrice - existingItem.price;
   }
  },
 },
});

export const cartActions= cartSlice.actions;
export default cartSlice.reducer;

