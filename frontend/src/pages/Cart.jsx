import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { formatCurrency } from '../utils/formatCurrency';

const Cart = () => {
  const { cartItems, getCartTotal, getCartCount } = useCart();
  const total = getCartTotal();
  const itemCount = getCartCount();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-md mx-auto" data-testid="empty-cart">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-16 h-16 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-10" data-testid="cart-title">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shopping Cart
          </span>
        </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 sticky top-24 shadow-xl border border-purple-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-700 text-lg">
                <span>Items ({itemCount})</span>
                <span data-testid="cart-subtotal">{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between text-gray-700 text-lg">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="border-t-2 border-purple-200 pt-4">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="cart-total">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-4"
              data-testid="checkout-button"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/products"
              className="block w-full bg-white hover:bg-gray-50 text-gray-800 text-center py-4 rounded-xl font-semibold transition border-2 border-gray-200 hover:border-purple-300"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
