import { uiActions } from "./uiSlice";
import { cartActions } from "./cart";

export const sendCartData = (cart) => {
 return async (dispatch) => {
  dispatch(
   uiActions.setNotification({
    status: "pending",
    title: "Sending...",
    message: "Sending Cart data!",
   }),
  );
  const sendRequest = async () => {
   const response = await fetch(
    "https://react-practise-417a1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
    { method: "PUT", body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}) },
   );
   if (!response.ok) {
    throw new Error("Sending cart data failed.");
   }
  };
  try {
   await sendRequest();
   dispatch(
    uiActions.setNotification({
     status: "success",
     title: "Success",
     message: "Sending Cart data successfull",
    }),
   );
  } catch (error) {
   dispatch(
    uiActions.setNotification({
     status: "error",
     title: "Error",
     message: "Sending Cart data failed!",
    }),
   );
   console.error(error);
  }
 };
};

export const fetchCartData = () =>{
  return async (dispatch) => {
    const fetchData= async () => {
      const response = await fetch('https://react-practise-417a1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');
      if(!response.ok){
        throw new Error("Fetching cart data failed!");
      }
      const data = await response.json();
       return data;
    }
    try {
      const cartData= await fetchData();
      dispatch(cartActions.replaceCart({items: cartData.items || [], totalQuantity:cartData.totalQuantity}));
    } catch (error) {
      console.error(error);
       uiActions.setNotification({
          title: "Error",
          status: "error",
          message: "Getting error after fetching data!"
        })
    }
  }
}