const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

// Definindo uma rota para obter todas as transações
 
router.get('/', productsController.getAllProducts); 
router.post('/', productsController.addProducts);
router.put('/:id', productsController.updateProductsPut); 
router.patch('/:id', productsController.updateProductsPatch); 
router.delete('/:id', productsController.deleteProducts); 

// Exportando o roteador 
module.exports = router;