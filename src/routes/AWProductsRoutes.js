const express = require('express');
const router = express.Router();
const AWProductsController = require('../controllers/AWProductsController');
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos a través del API Gateway
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos (con filtros)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       200:
 *         description: Lista de productos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/products', auth, AWProductsController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Products]
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
 *         description: Producto encontrado
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/products/:id', auth, AWProductsController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name: { type: string }
 *               price: { type: number }
 *               stock: { type: integer }
 *               category: { type: string }
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/products', auth, AWProductsController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Products]
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
 *               name: { type: string }
 *               price: { type: number }
 *               stock: { type: integer }
 *               category: { type: string }
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/products/:id', auth, AWProductsController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
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
 *         description: Producto eliminado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/products/:id', auth, AWProductsController.deleteProduct);

/**
 * @swagger
 * /products/{id}/reserve:
 *   post:
 *     summary: Reservar stock de un producto
 *     tags: [Products]
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
 *               quantity: { type: integer }
 *     responses:
 *       200:
 *         description: Stock reservado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/products/:id/reserve', auth, AWProductsController.reserveProduct);

/**
 * @swagger
 * /products/{id}/release:
 *   post:
 *     summary: Liberar stock de un producto
 *     tags: [Products]
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
 *               quantity: { type: integer }
 *     responses:
 *       200:
 *         description: Stock liberado exitosamente
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post('/products/:id/release', auth, AWProductsController.releaseProduct);

module.exports = router;