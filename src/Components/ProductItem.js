import { Link } from "react-router-dom";
import { currencyFormatter } from "../util";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_TO_CART, INCREASE_COUNT } from "../Redux/Slice/CartSlice";

function ProductItem({ id, title, price, image }) {
  const {
    Cart: { cart },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const formattedPrice = useMemo(() => currencyFormatter(price), [price]);

  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  const itemCount = cart.find((item) => item.id === id)?.count;

  const clickedHandler = () => {
    let pitem = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch(ADD_TO_CART(pitem));
  };

  const countHandler = (_id) => {
    dispatch(INCREASE_COUNT(_id));
  };

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>
      </div>
      <div className="itemPic">
        <Link to={`product/${id}`}>
          <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="" />
        </Link>
      </div>
      <div className="itemMeta">
        <div className="itemPrice">{formattedPrice}</div>

        {isInCart(id) ? (
          <button className="cartButton" onClick={() => countHandler(id)}>
            {itemCount}added to Cart
          </button>
        ) : (
          <button className="cartButton" onClick={clickedHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
