import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setError('');
      })
      .catch(err => {
        setError('Product not found.');
        console.error(err);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading product...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-blue-600">${product.price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
