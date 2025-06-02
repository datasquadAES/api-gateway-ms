require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const { PORT } = require('./config');
const errorHandler = require('./middlewares/errorHandler');

// Rutas
const ordersRoutes = require('./routes/AWOrdersRoutes');
const paymentsRoutes = require('./routes/AWPaymentsRoutes');
const productsRoutes = require('./routes/AWProductsRoutes');

// Swagger config importada
const swaggerSpec = require('./config/swagger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas principales
app.use('/api', ordersRoutes);
app.use('/api', paymentsRoutes);
app.use('/api', productsRoutes);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check
app.get('/', (req, res) => {
  res.send('API Gateway is running');
});

// Error handler
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});