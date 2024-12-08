import Cards from "./Cards";
import { useSelector } from "react-redux";

const ProductList = () => {
    const select = useSelector((state) => state.data.products);
    return(
        <div>
         <h1 className="text-center text-lg font-bold">Some Of Our Products</h1>
         <div className="p-2 products-container w-[95%]  m-auto flex gap-4 flex-wrap justify-center items-center">
            {select.map((item) => {
                return <Cards data={item} key={item.id}/>
            })}
       
         </div>
        </div>
    )
}

export default ProductList;