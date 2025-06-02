const OrdersService = require('../services/AWOrdersService');

class AWOrdersController {
  static async createOrder(req, res) {
    try {
      const order = await OrdersService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async getOrdersByFilter(req, res) {
    try {
      const orders = await OrdersService.getOrdersByFilter(req.query);
      res.json(orders);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async getOrderById(req, res) {
    try {
      console.log(`Fetching order with ID: ${req.params.id}`);
      const order = await OrdersService.getOrderById(req.params.id);
      res.json(order);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async updateOrder(req, res) {
    try {
      const order = await OrdersService.updateOrder(req.params.id, req.body);
      res.json(order);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async addItems(req, res) {
    try {
      const result = await OrdersService.addItems(req.params.id, req.body);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async removeItem(req, res) {
    try {
      const result = await OrdersService.removeItem(req.params.id, req.params.itemId);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async cancelOrder(req, res) {
    try {
      const result = await OrdersService.cancelOrder(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async deleteOrder(req, res) {
    try {
      const result = await OrdersService.deleteOrder(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async healthCheck(req, res) {
    try {
      const result = await OrdersService.healthCheck();
      res.json({ status: result });
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }
}

module.exports = AWOrdersController;