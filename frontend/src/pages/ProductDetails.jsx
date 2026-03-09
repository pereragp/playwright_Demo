import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const result = await productService.getProductById(id);

      if (result.success) {
        setProduct(result.data);
        setError(null);
      } else {
        setError(result.error);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="text-red-600 mb-4" data-testid="error-message">
          <p className="text-xl">{error}</p>
        </div>
        <button
          onClick={() => navigate('/products')}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
        >
          Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-600 flex items-center">
        <button
          onClick={() => navigate('/products')}
          className="hover:text-purple-600 transition-colors flex items-center font-medium"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Products
        </button>
        <span className="mx-3 text-gray-400">/</span>
        <span className="text-gray-800 font-medium">{product.title}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
        {/* Product Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
          <img
            src={product.image}
            alt={product.title}
            className="relative w-full rounded-2xl shadow-2xl"
            data-testid="product-detail-image"
          />
        </div>

        {/* Product Info */}
        <div>
          {/* Category */}
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-sm font-bold uppercase tracking-wider rounded-full">
            {product.category}
          </span>

          {/* Title */}
          <h1
            className="text-5xl font-extrabold text-gray-800 mt-4 mb-6"
            data-testid="product-detail-title"
          >
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-6" data-testid="product-detail-rating">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 ${
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
            <span className="ml-2 text-gray-600">{product.rating} / 5.0</span>
          </div>

          {/* Price */}
          <div className="mb-8">
            <span
              className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              data-testid="product-detail-price"
            >
              {formatCurrency(product.price)}
            </span>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Description</h3>
            <p
              className="text-gray-700 leading-relaxed text-lg"
              data-testid="product-detail-description"
            >
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 mb-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-4 px-10 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
              data-testid="add-to-cart-detail"
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white py-4 px-10 rounded-xl text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              View Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-10 border-t-2 border-purple-100 pt-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Free shipping on orders over $50</span>
              </li>
              <li className="flex items-center text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">30-day return policy</span>
              </li>
              <li className="flex items-center text-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">1-year warranty included</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;
