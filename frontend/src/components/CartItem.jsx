import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      data-testid="cart-item"
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-32 h-32 object-cover rounded-xl shadow-md"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800" data-testid="cart-item-title">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
        <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-3" data-testid="cart-item-price">
          {formatCurrency(item.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-4 bg-gray-50 rounded-xl px-4 py-3">
        <button
          onClick={handleDecrement}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
          data-testid="decrement-quantity"
        >
          -
        </button>
        <span className="text-xl font-bold w-12 text-center" data-testid="cart-item-quantity">
          {item.quantity}
        </span>
        <button
          onClick={handleIncrement}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
          data-testid="increment-quantity"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="text-2xl font-bold text-gray-800 min-w-25 text-right">
        {formatCurrency(item.price * item.quantity)}
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        data-testid="remove-item"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
