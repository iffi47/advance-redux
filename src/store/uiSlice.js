import { createSlice } from "@reduxjs/toolkit";

const initialState = {cartIsVisible: false};

const uiSlice= createSlice({
  name: "ui",
  initialState,
  reducers:{
    toggle(state){
      console.log("in UI");
      
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});


export const uiActions = uiSlice.actions;
export default uiSlice.reducer;