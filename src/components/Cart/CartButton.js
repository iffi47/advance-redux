import classes from './CartButton.module.css';
import { uiActions } from '../../store/uiSlice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch =  useDispatch();
  function handleShowCart(){
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
