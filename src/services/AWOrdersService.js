const axios = require('axios');
const { ORDERS_MS_URL } = require('../config');

class OrdersService {
  static async createOrder(orderData) {
    const response = await axios.post(`${ORDERS_MS_URL}/orders`, orderData);
    return response.data;
  }

  static async getOrdersByFilter(filters = {}) {
    const response = await axios.get(`${ORDERS_MS_URL}/orders/filter`, { params: filters });
    return response.data;
  }

  static async getOrderById(id) {
    const response = await axios.get(`${ORDERS_MS_URL}/orders/${id}`);
    return response.data;
  }

  static async updateOrder(id, updateData) {
    const response = await axios.put(`${ORDERS_MS_URL}/orders/${id}`, updateData);
    return response.data;
  }

  static async addItems(orderId, items) {
    const response = await axios.post(`${ORDERS_MS_URL}/orders/${orderId}/items`, items);
    return response.data;
  }

  static async removeItem(orderId, itemId) {
    const response = await axios.delete(`${ORDERS_MS_URL}/orders/${orderId}/items/${itemId}`);
    return response.data;
  }

  static async cancelOrder(orderId) {
    const response = await axios.post(`${ORDERS_MS_URL}/orders/${orderId}/cancel`);
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await axios.delete(`${ORDERS_MS_URL}/orders/${id}`);
    return response.data;
  }

  static async healthCheck() {
    const response = await axios.get(`${ORDERS_MS_URL}/`);
    return response.data;
  }
}

module.exports = OrdersService;