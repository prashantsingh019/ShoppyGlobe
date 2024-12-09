import Cards from "./Cards";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ProductList = () => {
  const select = useSelector((state) => state.data.products);
  
  const [search,setSearch] = useState('')
  
  const filteredProducts = select.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="p-4 flex justify-center ">
        <div className="flex items-center flex-col">
        <div className="search flex items-center bg-gray-300 text-black w-[180px] gap-2 justify-center rounded-lg">
        <input type="search" name="" id="search-bar" className="bg-gray-300 px-1 py-2 rounded-lg" placeholder={'Search here'} value={search}  onChange={(e) => setSearch(e.target.value)}/>
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={filteredProducts}/>
        </div>
        <div id="tags" className="flex items-center text-sm text-white">
        <button className="tag">under $ 100</button>
        <button className="tag">above 4.5 rating</button>
        <button className="tag">groceries</button>
        <button className="tag">under $ 100</button>
        </div>
        </div>
      </div>
      <h1 className="text-center text-xl font-semibold">Most loved Product by our happy costumers</h1>
      <div className="p-2 products-container w-[95%]  m-auto flex gap-4 flex-wrap justify-center items-center">
        {filteredProducts.map((item) => {
          return <Cards data={item} key={item.id} />
         })}
      </div>
    </div>
  );
};

export default ProductList;
