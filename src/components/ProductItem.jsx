import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md bg-white flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-3" />
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      </Link>
      <div className="mt-auto flex justify-between items-center pt-4">
        <span className="text-blue-600 font-bold text-lg">${product.price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;