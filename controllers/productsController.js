const inventory_db = require('../config/inventory_db');


const getAllProducts = (req, res) => { 
    inventory_db.query('SELECT * FROM products', (err, results) => { 
        if (err) { 
        console.error('Erro ao obter Produtos:', err); 
        res.status(500).send('Erro ao obter Produtos'); 
        return; 
        } 
        res.json(results); 
    }); 
};


// Função para adicionar uma nova transação

const addProducts = (req,res) => {
    const{nome, descrição, categoria, preço, estoque, data_de_validade} = req.body;
    inventory_db.query(
        'INSERT INTO Products (nome, descrição, categoria, preço, estoque, data_de_validade) values (?, ?, ?, ?, ?, ?)',
        [nome, descrição, categoria, preço, estoque, data_de_validade],
        (err,results) => {
            if (err){
               console.error('Erro ao adicionar produto:', err);
               res.status(500).send('Erro ao adicionar Produto');
               return; 
            }
            res.status(201).send('Produto adicionado com sucesso');
        }
    );
};


const updateProductsPut = (req,res) => {
    const {id} = req.params;
    const{nome, descrição, categoria, preço, estoque, data_de_validade} = req.body;
    inventory_db.query(
        'UPDATE products SET nome = ?, descrição = ?, categoria = ?, preço = ?, estoque = ?, data_de_validade = ? WHERE id = ?',
        [nome, descrição, categoria, preço, estoque, data_de_validade, id],
        (err, results) => {
            if (err){
                console.error('Erro ao atualizar o produto:', err); 
                res.status(500).send('Erro ao atualizar produto'); 
                return; 
            }
            res.send('Produto atualizado com sucesso');
        }
    );
};  


const updateProductsPatch = (req, res) => { 
        const { id } = req.params; 
        const fields = req.body; 
        const query = []; 
        const values = []; 
    
        for (const [key, value] of Object.entries(fields)) { 
        query.push(`${key} = ?`); 
        values.push(value); 
        }
    values.push(id); 
    inventory_db.query( 
        `UPDATE products SET ${query.join(',')} WHERE id = ?`, 
        values, 
        (err, results) => { 
        if (err) { 
            console.error('Erro ao atualizar Produto:', err); 
            res.status(500).send('Erro ao atualizar Produto'); 
            return; 
        } 
        res.send('Produto atualizado com sucesso'); 
        } 
    );    
};


const deleteProducts = (req, res) => { 
    const { id } = req.params; 
    inventory_db.query('DELETE FROM products WHERE id = ?', [id], (err, results) => { 
      if (err) { 
        console.error('Erro ao deletar ptoduto:', err); 
        res.status(500).send('Erro ao deletar produto'); 
        return; 
      } 
      res.send('produto deletado com sucesso'); 
    }); 
  }; 


module.exports = {
    getAllProducts,
    addProducts,
    updateProductsPut,
    updateProductsPatch,
    deleteProducts
};