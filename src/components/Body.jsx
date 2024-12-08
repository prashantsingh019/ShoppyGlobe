import React,{useState} from "react";
import { categories } from "../utils/hero-images";
import ProductList from "./ProductList";
import Hero from "./Hero";
const Body = () => {
  const[data,setData] = useState(categories)
  return (
    <main>
      <Hero />
      <div className="cateories">
        <h3 className="text-center text-lg font-bold">Popular categories</h3>
        <div className="card-container w-[95%] flex">
          <div className="category-card">
            <img
              src={data[0]}
              alt="_electronics"
              className="w-[100%] h-[80%] rounded-lg"
            />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img
              src={data[1]}
              alt="_clothing"
              className="w-[100%] h-[80%] rounded-lg"
            />
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <img
              src={data[2]}
              alt="_cosmetics"
              className="w-[100%] h-[80%] rounded-lg"
            />
            <h3>Cosmetics</h3>
          </div>
          <div className="category-card">
            <img
              src={data[3]}
              alt="_toys"
              className="w-[100%] h-[80%] rounded-lg"
            />
            <h3>Toys</h3>
          </div>
         
          <div className="category-card">
            <img
              src={data[4]}
              alt="_stationary"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Stationary</h3>
          </div>

          <div className="category-card">
            <img
              src={data[5]}
              alt="_mensWear"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Mens Wear</h3>

          </div>
          <div className="category-card">
            <img
              src={data[6]}
              alt="_watches"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Watches</h3>

          </div>
          <div className="category-card">
            <img
              src={data[7]}
              alt="_gaming"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Gaming</h3>

          </div>
          <div className="category-card">
            <img
              src={data[8]}
              alt="_laptops"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Laptops</h3>

          </div>
          <div className="category-card">
            <img
              src={data[9]}
              alt="_smartHome"
              className="w-[100%] h-[80%] rounded-lg"
            />
             <h3>Smart Home</h3>

          </div>
        </div>
      </div>
       {/* <ProductList /> */}

    </main>
  );
};

export default Body;
