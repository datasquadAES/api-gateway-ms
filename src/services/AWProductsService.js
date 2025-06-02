const axios = require('axios');
const { PRODUCTS_MS_URL } = require('../config');

class ProductsService {
  static async getAllProducts(params = {}) {
    const response = await axios.get(`${PRODUCTS_MS_URL}/products`, { params });
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(`${PRODUCTS_MS_URL}/products/${id}`);
    return response.data;
  }

  static async createProduct(productData) {
    const response = await axios.post(`${PRODUCTS_MS_URL}/products`, productData);
    return response.data;
  }

  static async updateProduct(id, updateData) {
    const response = await axios.put(`${PRODUCTS_MS_URL}/products/${id}`, updateData);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axios.delete(`${PRODUCTS_MS_URL}/products/${id}`);
    return response.data;
  }

  static async reserveProduct(productId, quantity) {
    const response = await axios.post(`${PRODUCTS_MS_URL}/products/${productId}/reserve`, { quantity });
    return response.data;
  }

  static async releaseProduct(productId, quantity) {
    const response = await axios.post(`${PRODUCTS_MS_URL}/products/${productId}/release`, { quantity });
    return response.data;
  }
}

module.exports = ProductsService;