import { currencyFormatter } from "../util";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_ITEM,
} from "../Redux/Slice/CartSlice";

const CartItem = ({ id, title, price, image, count }) => {
  const dispatch = useDispatch();

  const formattedPrice = useMemo(() => currencyFormatter(price), [price]);

  const increaseCount = (_id) => {
    dispatch(INCREASE_COUNT(_id));
  };

  const decreaseCount = (_id) => {
    if (count > 1) {
      dispatch(DECREASE_COUNT(_id));
    } else {
      dispatch(REMOVE_ITEM(_id));
    }
  };

  const closeItemfromCart = (_id) => {
    dispatch(REMOVE_ITEM(_id));
  };

  return (
    <div className="CartItem">
      <div className="itemPic">
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="" />
      </div>
      <div className="itemInfo">
        <p>{title}</p>
        <div className="cartUpdater">
          <button onClick={() => decreaseCount(id)}>-</button>
          <div>{count}</div>
          <button onClick={() => increaseCount(id)}>+</button>
          <br />
          <br />
          <button onClick={() => closeItemfromCart(id)}>❌</button>
        </div>
      </div>
      <div className="itemPrice">{formattedPrice}</div>
    </div>
  );
};

export default CartItem;
