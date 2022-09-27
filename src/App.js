import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cartpage from "./Pages/Cartpage";
import Productpage from "./Pages/Productpage";
import Erorr from "./Pages/Erorr";
import data from "./Data.json"

import { useDispatch } from "react-redux";
import { GETDATA } from "./Redux/Slice/ProductsSlice";
import { useSelector } from "react-redux";

const App = () => {
  const { productsData } = useSelector((state) => state.Products);

  const dispatch = useDispatch();

  // take data from local server
  // const getProductdata = async () => {
  //   let res = await fetch("http://localhost:4000/products");
  //   let data = await res.json();
  //   return data;
  // };

  useEffect(() => {
    //take data from promise
    // getProductdata().then(function (data) {
    //   dispatch(GETDATA(data));
    // });

    //take data from json file
    dispatch(GETDATA(data));
  }, []);

  console.log("data is ", productsData);

  return (
    <div className="appWrapper">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cartpage" element={<Cartpage />}></Route>
          <Route path="/product/:id" element={<Productpage />}></Route>
          <Route path="*" element={<Erorr />}></Route>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
