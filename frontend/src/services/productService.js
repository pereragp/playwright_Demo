import productsData from '../data/products.json';

// Simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  // Get all products
  getProducts: async () => {
    try {
      await delay(800); // Simulate network latency
      return {
        success: true,
        data: productsData,
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch products',
      };
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      await delay(500); // Simulate network latency
      const product = productsData.find((p) => p.id === parseInt(id));
      
      if (!product) {
        return {
          success: false,
          error: 'Product not found',
        };
      }

      return {
        success: true,
        data: product,
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch product',
      };
    }
  },

  // Get products by category
  getProductsByCategory: async (category) => {
    try {
      await delay(600);
      const filtered = productsData.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
      return {
        success: true,
        data: filtered,
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch products by category',
      };
    }
  },

  // Get featured products (first 4 for homepage)
  getFeaturedProducts: async () => {
    try {
      await delay(500);
      return {
        success: true,
        data: productsData.slice(0, 4),
      };
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch featured products',
      };
    }
  },
};
