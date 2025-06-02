const swaggerJsdoc = require('swagger-jsdoc');
const { PORT } = require('./index');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gateway - PickHealthy',
      version: '1.0.0',
      description: 'API Gateway para los microservicios de órdenes, pagos y productos',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    './src/routes/AWOrdersRoutes.js',
    './src/routes/AWPaymentsRoutes.js',
    './src/routes/AWProductsRoutes.js',
  ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;