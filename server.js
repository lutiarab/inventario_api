//importar as bibliotecas 
const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');

const bodyParser = require('body-parser');

//configurar as variáveis de ambiente 
dotenv.config();

//Inicializa uma nova aplicação Express
const app = express();

//Configura o CORS e o body-parser
app.use(cors());
app.use(bodyParser.json());

//Rota inicial para testar o servidor
app.get('/',(req,res) => {
    res.send('Servidor está rodando');
});

// Configura o servidor para escutar em uma porta específica 
const PORT = process.env.PORT || 3000;

app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

//Inicie com o dotenv 

const dotenv = require('dotenv');
ambiente DeviceOrientationEvent.config();

//importar as bibliotecas 
const db = require('./config/db');