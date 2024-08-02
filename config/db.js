const mysql = require('mysql2');

const db = mysql.createConnection({
    host:process.envDB_HOST, //endereço do servidor de banco de dados
    user:process.env.DB_USER, //nome de usuário para acessar o banco de dados
    password:process.env.DB_PASS, //senha do usuáriopara acessar o banco de dados
    database:process.env.DB_NAME //Nome do Banco de Dados
});

db.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao Banco de Dados.', err);//Exibe a mensagem de erro
    return;
    }
    console.log(`Conectado ao Banco de Dados ${process.env.DB_NAME}`);//Exibe a mensagem de sucesso
});

module.exports=db;