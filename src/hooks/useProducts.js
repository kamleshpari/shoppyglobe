import { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = (category = '') => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = category
      ? `https://dummyjson.com/products/category/${category}`
      : `https://dummyjson.com/products`;

    axios.get(url)
      .then(res => {
        setProducts(res.data.products || res.data);
        setError('');
      })
      .catch(() => setError('Failed to fetch products.'))
      .finally(() => setLoading(false));
  }, [category]);

  return { products, error, loading };
};

export default useProducts;
