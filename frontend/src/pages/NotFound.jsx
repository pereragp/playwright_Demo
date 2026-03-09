import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2s"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4s"></div>
      
      <div className="text-center relative z-10 px-4">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-9xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            404
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6 animate-fade-in-up animation-delay-200">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-12 text-xl animate-fade-in-up animation-delay-400">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Link
            to="/"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-block"
            data-testid="home-link"
          >
            Go Back Home
          </Link>
          <Link
            to="/products"
            className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 inline-block"
          >
            Browse Products
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-300 rounded-full animate-pulse"></div>
          <div className="w-16 h-16 border-4 border-pink-300 rounded-full animate-pulse animation-delay-200"></div>
          <div className="w-16 h-16 border-4 border-indigo-300 rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
