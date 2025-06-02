const express = require('express');
const router = express.Router();
const AWOrdersController = require('../controllers/AWOrdersController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestión de órdenes a través del API Gateway
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crear una nueva orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderData:
 *                 type: object
 *                 properties:
 *                   user_id: { type: integer }
 *                   store_id: { type: integer }
 *                   dealer_id: { type: integer }
 *                   address: { type: string }
 *                   total_amount: { type: number }
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product_id: { type: integer }
 *                     quantity: { type: integer }
 *                     unit_price: { type: number }
 *               payment_method:
 *                 type: string
 *                 enum: [tarjeta, pse, efectivo]
 *     responses:
 *       201:
 *         description: Orden creada exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/orders', auth, AWOrdersController.createOrder);

/**
 * @swagger
 * /orders/filter:
 *   get:
 *     summary: Obtener órdenes por filtros
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID de la orden
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID de usuario
 *       - in: query
 *         name: store_id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID de tienda
 *       - in: query
 *         name: dealer_id
 *         schema:
 *           type: integer
 *         description: Filtrar por ID de repartidor
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filtrar por estado de la orden
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *         description: Filtrar por dirección
 *       - in: query
 *         name: total_amount
 *         schema:
 *           type: number
 *         description: Filtrar por monto total
 *       - in: query
 *         name: created_at
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filtrar por fecha de creación
 *       - in: query
 *         name: updated_at
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Filtrar por fecha de actualización
 *     responses:
 *       200:
 *         description: Lista de órdenes filtradas
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/orders/filter', auth, AWOrdersController.getOrdersByFilter);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Consultar una orden por ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     responses:
 *       200:
 *         description: Detalles de la orden
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Orden no encontrada
 */
router.get('/orders/:id', auth, AWOrdersController.getOrderById);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Actualizar una orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Datos a actualizar
 *     responses:
 *       200:
 *         description: Orden actualizada exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/orders/:id', auth, AWOrdersController.updateOrder);

/**
 * @swagger
 * /orders/{id}/items:
 *   post:
 *     summary: Agregar productos a una orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 product_id:
 *                   type: integer
 *                 quantity:
 *                   type: integer
 *                 unit_price:
 *                   type: number
 *     responses:
 *       200:
 *         description: Productos agregados exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/orders/:id/items', auth, AWOrdersController.addItems);

/**
 * @swagger
 * /orders/{id}/items/{itemId}:
 *   delete:
 *     summary: Eliminar un producto de una orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/orders/:id/items/:itemId', auth, AWOrdersController.removeItem);

/**
 * @swagger
 * /orders/{id}/cancel:
 *   post:
 *     summary: Cancelar una orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     responses:
 *       200:
 *         description: Orden cancelada exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/orders/:id/cancel', auth, AWOrdersController.cancelOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Eliminar una orden
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la orden
 *     responses:
 *       200:
 *         description: Orden eliminada exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/orders/:id', auth, AWOrdersController.deleteOrder);

/**
 * @swagger
 * /orders/health:
 *   get:
 *     summary: Verificar el estado del servicio de órdenes
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: El servicio está funcionando
 */
router.get('/orders/health', AWOrdersController.healthCheck);

module.exports = router;