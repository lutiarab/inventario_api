const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

// Definindo uma rota para obter todas as transações 
router.get('/', productsController.getAllProducts); 

// Exportando o roteador 
module.exports = router;