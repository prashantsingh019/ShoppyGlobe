import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../redux/cart";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.data.products);
  const filter = data.filter((item) => item.id == params.id);
  console.log(filter[0].category);
  function handleClick(item){
    dispatch(addToCart(item[0]))
  }
  return (
    <div className="product-container flex text-xl p-[1em] w-[800px]">
      <div className="img-container rounded-lg w-[200px]">
        <img
          src={filter[0].thumbnail}
          className="rounded-lg product-details-img "

        />
      </div>

      <div className="other-info p-[1em]">
        <h6>{filter[0].category}</h6>

        <h1 className="text-[1.5em]">{filter[0].brand}</h1>
        <h3 className="text-lg">
          <FontAwesomeIcon icon={faStar} className="" />{" "}
          {filter[0].rating}
        </h3>
        <h1>$ {filter[0].price}</h1>
        <div className="action-btns flex flex-col gap-1 w-[100%]">
          <button>Checkout now</button>
          <button onClick={()=>handleClick(filter)}>Add to Cart</button>
        </div>
      </div>

      <div className="w-[250px] p-2">
        {filter[0].description}
      </div>
    </div>
  );
};

export default ProductDetails;
