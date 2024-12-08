import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const Header = () => {
  const [pointer, setPointer] = useState("Home");
  const selector = useSelector((state) => state.cart.cartItems);
 
  
  return (
    <nav className="bg-gray-500 flex p-5 text-2xl">
      <div className="left-nav w-[20%] text-yellow-500 ">
        <h1 className="text-center cursor-pointer font-bold">
          ShoppyGlobe{" "}
          <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
        </h1>
      </div>
      <div className="middle-nav w-[60%] text-[0.8em]">
        <ul className="flex gap-5 justify-center">

          <li onClick={() => setPointer("Home")}>
          <Link to="/">
            Home {pointer == "Home" && <hr />}
          </Link>
          </li>

          <li onClick={() => setPointer("Shop")}>
            <Link to="/shop" className="link">
            Shop {pointer == "Shop" && <hr />}
            </Link>
          </li>
          <li onClick={() => setPointer("About")}>
            About{pointer == "About" && <hr />}
            
          </li>
          <li onClick={() => setPointer("Contact")}>
            Contact{pointer == "Contact" && <hr />}
           
          </li>
        </ul>
      </div>
      <div className="right-nav w-[30%] flex gap-10 justify-center">
        <div className="link">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="link">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="link">
          <Link to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping} />{" "}
          <sup className="px-1 text-lg bg-red-600 rounded-full">{selector.length}</sup>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
