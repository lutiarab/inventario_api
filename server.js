//importar as bibliotecas 
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


//importar as bibliotecas 
const inventory_db = require('./config/inventory_db');

const cors = require('cors');

const bodyParser = require('body-parser');

//Inicializa uma nova aplicação Express

const app = express();
const productsRoutes = require('./routes/products.js');


app.use(cors());
app.use(bodyParser.json());
app.use('/api/products',productsRoutes);

//Rota inicial para testar o servidor
app.get('/',(req,res) => {
    res.send(`Servidor está rodando ${PORT}`);
});

// Configura o servidor para escutar em uma porta específica 
const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});
