import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../redux/cart";
import { useDispatch } from "react-redux";
function Cards({ data }) {
  const dispatch = useDispatch();

  
  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  return (
    <div className="product-card">
      <div className="img-container w-[100%] h-[50%] rounded-lg">
        <img src={data.thumbnail} alt="" className="card-img" />
      </div>
      <div className="other-details h-[50%] overflow-hidden">
        <h3>{data.title}</h3>

        <div className="flex justify-between items-center">
          <h3>{data.category}</h3>{" "}
          <h3 className="flex items-center p-1">
            {data.rating}
            <FontAwesomeIcon icon={faStar} />
          </h3>
        </div>

        <h3 className="text-xl flex items-center justify-between">
          <span>
          <FontAwesomeIcon icon={faDollarSign} /> {data.price}</span>
         <span className="text-sm">({data.stock})</span> 
        </h3>
      </div>
      <div className="buttons">
        <button
          className="btn-md bg-yellow-500 text-white"
          onClick={() => handleAddToCart(data)}
        >
          Add To Cart
        </button>
        <button className="btn-md btn-success bg-green-700 text-white">
          Order now
        </button>
      </div>
    </div>
  );
}

export default Cards;
