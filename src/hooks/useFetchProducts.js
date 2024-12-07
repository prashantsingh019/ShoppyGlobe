import { useEffect, useState } from "react";

const useFetchProducts = async (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData(API);
  }, [API]);
  async function fetchData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error while fething please check API");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  console.log(products);
  
  return { products, loading, error };
};

export default useFetchProducts;
