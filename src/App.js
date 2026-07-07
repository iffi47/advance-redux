import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
 const toggleCart = useSelector((state) => state.ui.cartIsVisible);
 const cart = useSelector((state) => state.cart);
 useEffect(() => {
  fetch(
   "https://react-practise-417a1-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
   { method: "PUT", body: JSON.stringify(cart) },
  );
 }, [cart]);
 return (
  <Layout>
   {toggleCart && <Cart />}
   <Products />
  </Layout>
 );
}

export default App;
