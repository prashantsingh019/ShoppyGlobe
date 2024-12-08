import React, { useState } from "react";

const LongCard = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = data.price;
  const [price, setPrice] = useState(data.price);
  const handleClick = (e) => {
    if (quantity >= 0) {
      if (e.target.textContent === "+") {
        setQuantity((prevQty) => {
          const newQty = prevQty + 1;
          setPrice(newQty * unitPrice);
          return newQty;
        });
      } else if (e.target.textContent === "-" && quantity > 0) {
        setQuantity((prevQty) => {
          const newQty = prevQty - 1;
          setPrice(newQty * unitPrice);
          return newQty;
        });
      }
    }
  };
  return (
    <div className="long-card flex">
      <div className="mini-image">
        <img src={data.thumbnail} />
      </div>
      <div className="text-section w-[90%] flex items-center p-1 justify-between">
        <div className="left-sect">
          <button className="btn-sm">{data.category}</button>
          <h2 className="text-2xl">{data.brand}</h2>
          <span>{data.returnPolicy}</span>
          <span className="block">{data.shippingInformation}</span>
          <span className="block">{data.warrantyInformation}</span>
        </div>
        <div className="right-sect">
          <div className="discount">
            $ {price + (price / 100) * data.discountPercentage}
          </div>
          <div className="actual-price text-2xl">$ {price}</div>
          <div className="quantity-counter">
            <button className="decrement-btn" onClick={handleClick}>
              -
            </button>

            <div className="rounded-md p-1 quantity">{quantity}</div>

            <button className="increment-btn" onClick={handleClick}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
