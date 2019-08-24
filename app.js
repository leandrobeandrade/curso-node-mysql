// -- Módulo HTPP - Node

/* var http = require('http')

http.createServer(function(req, res) {
	res.end('Olaaaa Todos !!')
}).listen(8081)

console.log('Servidor rodando na porta: 8081'); */

// =========================================================== //


// == Módulo HTPP - Express 

const express = require('express');
const app = express();

// -- Rotas são caminhos na url para acessar determinada página
app.get('/', (req, res) => {
	res.send('Rodando com Express !!')
})

// ## Rodar aplicação no terminal com nodemon => nodemon app.js


// -- Apenas um método send() pode ser enviado por requisição
app.get('/sobre', (req, res) => {
	res.send('Página SOBRE !!')
})

// -- Parâmetros em rotas possibilitam a passagem dos mesmos pela url
app.get('/pessoa/:nome', (req, res) => {
	res.send(req.params.nome)
})

// -- Parâmetros em rotas possibilitam a passagem dos mesmos pela url
app.get('/html', (req, res) => {
	res.sendFile(`${__dirname}/html/index.html`)
})

// -- Sempre no final do arquivo
app.listen(8081, () => {
	console.log('Servidor rodando na PORTA: 8081 na URL: http://localhost:8081')
})