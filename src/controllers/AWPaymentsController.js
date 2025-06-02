const PaymentsService = require('../services/AWPaymentsService');

class AWPaymentsController {
  static async createPayment(req, res) {
    try {
      const payment = await PaymentsService.createPayment(req.body);
      res.status(201).json(payment);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async getAllPayments(req, res) {
    try {
      const payments = await PaymentsService.getAllPayments(req.query);
      res.json(payments);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async getPaymentById(req, res) {
    try {
      const payment = await PaymentsService.getPaymentById(req.params.id);
      res.json(payment);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async updatePayment(req, res) {
    try {
      const payment = await PaymentsService.updatePayment(req.params.id, req.body);
      res.json(payment);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async deletePayment(req, res) {
    try {
      const result = await PaymentsService.deletePayment(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }
}

module.exports = AWPaymentsController;