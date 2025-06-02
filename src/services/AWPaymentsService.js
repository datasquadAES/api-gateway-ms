const axios = require('axios');
const { PAYMENTS_MS_URL } = require('../config');

class PaymentsService {
  static async getAllPayments(params = {}) {
    const response = await axios.get(`${PAYMENTS_MS_URL}/payments`, { params });
    return response.data;
  }

  static async getPaymentById(id) {
    const response = await axios.get(`${PAYMENTS_MS_URL}/payments/${id}`);
    return response.data;
  }

  static async createPayment(paymentData) {
    const response = await axios.post(`${PAYMENTS_MS_URL}/payments`, paymentData);
    return response.data;
  }

  static async updatePayment(id, updateData) {
    const response = await axios.put(`${PAYMENTS_MS_URL}/payments/${id}`, updateData);
    return response.data;
  }

  static async deletePayment(id) {
    const response = await axios.delete(`${PAYMENTS_MS_URL}/payments/${id}`);
    return response.data;
  }
}

module.exports = PaymentsService;