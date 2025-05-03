import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty. <Link to="/" className="text-blue-600 hover:underline">Go shopping</Link></p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="text-right mt-6">
            <h2 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h2>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
