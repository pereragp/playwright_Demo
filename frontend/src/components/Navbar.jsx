import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const { user, logout } = useAuth();
  const cartCount = getCartCount();

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-2xl sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">ShopHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
              data-testid="products-link"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm"
              data-testid="cart-link"
            >
              Cart
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg"
                  data-testid="cart-count"
                >
                  {cartCount}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-white text-sm font-medium">
                    {user.name}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  data-testid="logout-button"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                data-testid="login-link"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link to="/cart" className="relative" data-testid="cart-link-mobile">
              <svg
                className="w-6 h-6 text-white"
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
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
