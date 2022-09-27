import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import {FaBars} from "react-icons/fa"
import { GrClose } from "react-icons/gr";

function Header() {
  const {
    Products: { siteName },
    Cart: { cart },
  } = useSelector((state) => state);

  const [isMobile,setIsMobile] = useState(false)

  console.log("Cart is ", cart);
  console.log("sitename is ", siteName);

  const cartCount = cart?.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="appHeader">
      <h2 className="sitename">{siteName}</h2>
      <ul className={isMobile? "nav-mobile":"nav"} onClick={()=> setIsMobile(false)}>
        <li>
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/cartpage" className="link">
            CART ({cartCount})
          </Link>
        </li>
      </ul>
      <IconContext.Provider value={{color:"black" ,size:"1em"}}>
        <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
          {
            isMobile ? <GrClose/>: <FaBars/>
          }
        </button>
        </IconContext.Provider>
    </div>
  );
}

export default Header;
