import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
      data-testid="product-card"
    >
      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            data-testid="product-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-semibold uppercase tracking-wider rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <Link to={`/products/${product.id}`}>
          <h3
            className="text-lg font-bold text-gray-800 mt-3 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 line-clamp-2 min-h-[56px]"
            data-testid="product-title"
          >
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mt-2" data-testid="product-rating">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            data-testid="product-price"
          >
            {formatCurrency(product.price)}
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-4 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            data-testid="add-to-cart"
          >
            Add to Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="flex-1 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white py-3 px-4 rounded-xl transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            data-testid="view-details"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
