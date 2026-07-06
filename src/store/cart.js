import {createSlice} from "@reduxjs/toolkit";

const initialState= {totalAmount:0 }

const cartSlice= createSlice({
  name: "cart",
  initialState,
  reducers:{
    increment: (state,action) =>{
      state.totalAmount= state.totalAmount+action.payload
    },
    decrement: (state, action) =>{
      state.totalAmount= state.totalAmount-action.payload
    }
  }
});

export const cartActions= cartSlice.actions;
export default cartSlice.reducer;

