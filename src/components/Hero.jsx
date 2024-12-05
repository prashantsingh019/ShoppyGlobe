import React, { useState } from "react";
import { heroUrls } from "../utils/hero-images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const [prevCount, setCount] = useState(0);
  const handleIncrement = () => {
    if (heroUrls.length - 1 <= prevCount) {
      setCount(0);
    } else {
      setCount(prevCount + 1);
    }
  };

  return (
    <div className="hero-image flex flex-col">
      <div className="float-buttons w-screen flex justify-between p-3 absolute top-52">
        <button
          className="bg-gray-300 p-4 text-2xl py-5 rounded-xl"
          onClick={() => {
            if (prevCount >= 1) {
              setCount(prevCount - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
        <button
          className="bg-gray-300 p-4 text-2xl py-5"
          onClick={handleIncrement}
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      </div>

      <div className="img w-[100%] h-80 overflow-hidden p-1">
        <img
          src={heroUrls[prevCount]}
          alt="_heroImage"
          className="w-screen object-fill"
        />
      </div>
    </div>
  );
}

export default Hero;
