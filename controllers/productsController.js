const db = require('../config/db');

const getAllProducts = (req, res) => { 
    db.query('SELECT * FROM products', (err, results) => { 
        if (err) { 
        console.error('Erro ao obter Produtos:', err); 
        res.status(500).send('Erro ao obter Produtos'); 
        return; 
        } 
        res.json(results); 
    }); 
};

// Função para adicionar uma nova transação



module.exports = {
    getAllProducts
};