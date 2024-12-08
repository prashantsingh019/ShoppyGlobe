import { useEffect, useState } from "react";

const useFetchProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error while fething please check API");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData(API);
  }, [API]);

  return { products, loading, error };
};

export default useFetchProducts;
