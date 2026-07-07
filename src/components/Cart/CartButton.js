import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch =  useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  function handleShowCart(){
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
