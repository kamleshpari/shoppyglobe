import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useSearch } from '../context/SearchContext';

const categories = [
  '',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-dresses',
  'womens-shoes',
  'womens-bags',
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();
  const { search } = useSearch();

  const { products, error, loading } = useProducts(selectedCategory);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        >
          <option value="">All Categories</option>
          {categories.filter(Boolean).map((cat) => (
            <option key={cat} value={cat}>
              {cat.replace('-', ' ')}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={() => dispatch(addToCart(product))}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;