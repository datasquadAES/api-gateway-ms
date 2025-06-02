require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3005,
  JWT_SECRET: process.env.JWT_SECRET || 'supersecreto',
  ORDERS_MS_URL: process.env.ORDERS_MS_URL || 'http://localhost:3000',
  PRODUCTS_MS_URL: process.env.PRODUCTS_MS_URL || 'http://localhost:3001',
  PAYMENTS_MS_URL: process.env.PAYMENTS_MS_URL || 'http://localhost:3002'
};