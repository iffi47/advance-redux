import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiSlice";
import Notification from "./components/UI/Notification";

function App() {
  const toggleCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification)
  useEffect(() => {
   const sendCartData = async () => {
    dispatch(
     uiActions.setNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending Cart data!",
     }),
    );
    const response = await fetch(
     "https://react-practise-417a1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
     { method: "PUT", body: JSON.stringify(cart) },
    );
    if (!response.ok) {
     throw new Error("Sending cart data failed.");
    }
    dispatch(
     uiActions.setNotification({
      status: "success",
      title: "Success",
      message: "Sending Cart data successfull",
     }),
    );
   };
   sendCartData().catch((error) => {
    dispatch(
     uiActions.setNotification({
      status: "error",
      title: "Error",
      message: "Sending Cart data failed!",
     }),
    );
    console.error(error);
   });
  }, [cart, dispatch]);
  return (
   <>
    {notification.status !== "success" && (
     <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
     />
    )}
    {notification.status === "success" && (
     <Layout>
      {toggleCart && <Cart />}
      <Products />
     </Layout>
    )}
   </>
  );
}

export default App;
