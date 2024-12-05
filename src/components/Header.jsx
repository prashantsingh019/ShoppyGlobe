import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faCartShopping,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <nav className="bg-gray-500 flex p-5 text-2xl">
      <div className="left-nav w-[20%] text-yellow-500 ">
        <h1 className="text-center cursor-pointer font-bold">
            ShoppyGlobe {" "}
            <FontAwesomeIcon icon={faBagShopping} className="text-3xl"/>
            </h1>
      </div>
      <div className="middle-nav w-[60%]">
        <ul className="flex gap-5 justify-center">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
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
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
