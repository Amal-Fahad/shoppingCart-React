import React from "react";
import data from "../Data.json"
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { currencyFormatter } from "../util/index";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_CART, INCREASE_COUNT } from "../Redux/Slice/CartSlice";

const Productpage = () => {
  const { cart } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const [item, setitem] = useState();
  const { id } = useParams();
  console.log(id);


  useEffect(()=>{
    data.map((item)=>{
      if(item.id === id){
       setitem(item)
      }
     return item
    })
  },[id])
               
                    //take data from lacal server
  // useEffect(() => {
  //   const getdata = async () => {
  //     let res = await fetch(`http://localhost:4000/products/${id}`);
  //     let data = await res.json();
  //     setitem(data);
  //   };
  //   getdata();
  // }, [id]);

  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  const itemCount = cart.find((item) => item.id === id)?.count;

  const clickedHandler = () => {
    let pitem = {
      id,
      title: item?.title,
      price: item?.price,
      image: item?.image,
      count: 1,
    };
    dispatch(ADD_TO_CART(pitem));
  };

  const countHandler = (_id) => {
    dispatch(INCREASE_COUNT(_id));
  };

  return (
    <div className="Productpage">
      <img src={`${process.env.PUBLIC_URL}/images/${item?.image}`} alt="" />
      <div className="itemMeta">
        <h1>{item?.title}</h1>
        <div className="itemPrice">
          {item ? currencyFormatter(item.price) : ""}
        </div>

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
};

export default Productpage;
