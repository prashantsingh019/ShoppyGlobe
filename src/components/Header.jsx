import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
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
  // 
  return (
    <nav className="flex p-5 text-2xl bg-gray-500 ">
      <div className="left-nav w-[20%] text-yellow-500">
        <h1 className="text-center cursor-pointer font-bold logo">
          ShoppyGlobe{" "}
          <FontAwesomeIcon icon={faBagShopping} className="text-3xl icon" />
        </h1>
      </div>
      <div className="middle-nav w-[60%] text-[0.8em]">
        <ul className="flex gap-5 justify-center text-[1.1em]">
          <li onClick={() => setPointer("Home")}>
            <Link to="/">Home {pointer == "Home" && <hr />}</Link>
          </li>

          <li onClick={() => setPointer("Products")}>
            <Link to="/products" className="link">
              Products {pointer == "Products" && <hr />}
            </Link>
          </li>
          <li>
            About{pointer == "About" && <hr />}
          </li>
          <li >
            Contact{pointer == "Contact" && <hr />}
          </li>
        </ul>
      </div>
      <div className="right-nav w-[30%] flex gap-10 justify-center">
        <div className="link">
          <FontAwesomeIcon icon={faUser} className="userIcon"/>
        </div>

        <div className="link">
          <FontAwesomeIcon icon={faHeart} className="likeIcon"/>
        </div>
        <div className="link">
          <Link to={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} />{" "}
            <sup className="px-1 text-lg bg-red-600 rounded-full">
              {selector.length}
            </sup>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
