import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm">${item.price} × {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded px-2 py-1"
          min="1"
        />
        <button
          onClick={handleRemove}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;