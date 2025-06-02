const ProductsService = require('../services/AWProductsService');

class AWProductsController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductsService.getAllProducts(req.query);
      res.json(products);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async getProductById(req, res) {
    try {
      const product = await ProductsService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const product = await ProductsService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async updateProduct(req, res) {
    try {
      const product = await ProductsService.updateProduct(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const result = await ProductsService.deleteProduct(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async reserveProduct(req, res) {
    try {
      const result = await ProductsService.reserveProduct(req.params.id, req.body.quantity);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }

  static async releaseProduct(req, res) {
    try {
      const result = await ProductsService.releaseProduct(req.params.id, req.body.quantity);
      res.json(result);
    } catch (error) {
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  }
}

module.exports = AWProductsController;