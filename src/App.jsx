import Header from "./components/Header";
import Body from "./components/Body";
import useFetchProducts from "./hooks/useFetchProducts";
import "./App.css";
import { giveData } from "./redux/data";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router";
// import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import './responsive.css'

function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useFetchProducts(
    "https://dummyjson.com/products"
  );
  useEffect(() => {
  
    if (products) {
      dispatch(giveData(products));
    }
  }, [products, dispatch]);

  if (error) return error;
  return (
    <div className="border-box relative">
      {loading && <span className="loader"></span>}
      
      <Header />
      
      <Outlet />
    </div>
  );
}

export default App;
