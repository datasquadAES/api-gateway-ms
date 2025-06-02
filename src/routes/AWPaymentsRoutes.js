const express = require('express');
const router = express.Router();
const AWPaymentsController = require('../controllers/AWPaymentsController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Gestión de pagos a través del API Gateway
 */

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Crear un nuevo pago
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id: { type: integer }
 *               user_id: { type: integer }
 *               amount: { type: number }
 *               status: { type: string }
 *               payment_method: { type: string }
 *               transaction_id: { type: string }
 *     responses:
 *       201:
 *         description: Pago creado exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/payments', auth, AWPaymentsController.createPayment);

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Obtener todos los pagos (con filtros)
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: order_id
 *         schema:
 *           type: integer
 *         required: false
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         required: false
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: payment_method
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: amount
 *         schema:
 *           type: number
 *         required: false
 *     responses:
 *       200:
 *         description: Lista de pagos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/payments', auth, AWPaymentsController.getAllPayments);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Obtener un pago por ID
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pago encontrado
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/payments/:id', auth, AWPaymentsController.getPaymentById);

/**
 * @swagger
 * /payments/{id}:
 *   put:
 *     summary: Actualizar un pago
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount: { type: number }
 *               status: { type: string }
 *               payment_method: { type: string }
 *               transaction_id: { type: string }
 *     responses:
 *       200:
 *         description: Pago actualizado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/payments/:id', auth, AWPaymentsController.updatePayment);

/**
 * @swagger
 * /payments/{id}:
 *   delete:
 *     summary: Eliminar un pago
 *     tags: [Payments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pago eliminado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Pago no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/payments/:id', auth, AWPaymentsController.deletePayment);

module.exports = router;