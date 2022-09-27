import CartItem from "./CartItem";
import { currencyFormatter } from "../util";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "../Redux/Slice/CartSlice";

import { useMemo } from "react";
import { useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state.Cart);

  const dispatch = useDispatch();

  const [model, setModel] = useState(false);

  const totalAmount = cart.reduce((acc, currentVal) => {
    return acc + currentVal.count * currentVal.price;
  }, 0);

  const formattedPrice = useMemo(
    () => currencyFormatter(totalAmount),
    [totalAmount]
  );

  const clearHandler = () => {
    dispatch(CLEAR_CART());
  };
  const checkOutHandler = () => {
    setModel(!model);
  };

  return cart.length ? (
    <div className="cart">
      <h2>Cart</h2>

      <div className="cartList">
        {cart.map((cartproduct) => {
          return <CartItem key={cartproduct.id} {...cartproduct} />;
        })}
      </div>
      <div className="cartTotal">Total :{formattedPrice}</div>
      <div className="cartFooter">
        <button className="clear" onClick={clearHandler}>
          Clear Cart
        </button>
        <button className="checkout" onClick={checkOutHandler}>
          Checkout
        </button>
        {model && (
          <div className="checkoutModel">
            <div className="modelContent">
              <h3>React Shopping Cart</h3>
              <p>welcome to react shop</p>
              <button onClick={checkOutHandler}>CLOSE</button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="cart">
      <h3>Please add the items</h3>
    </div>
  );
};

export default Cart;
