const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

const Post = require('./models/Post')

let id;

// == Configura o Handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'               // layout padrão - main html
}))

app.set('view engine', 'handlebars')

// == Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// == Rotas
app.get('/', (req, res) => {
    Post.findAll({                      // findAll() retorna todas as postagens do BD
        order: [['id', 'DESC']]         // ordena da postagen mais nova para a mais antiga
    }).then((_posts) => {       
        res.render('home', {
            posts:  _posts              // imprime no Html o retorno
        })
    })
})

app.get('/cad', (req, res) => {         // get <- acessa as rotas
    res.render('post')
})

/**
 * Cria uma postagem no Banco
 */

app.post('/add', (req, res) => {        // post <- só pode ser acessada por um post no Html
    Post.create({                       // cria e insere no BD um post com os dados do Html
        titulo: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Houve um ERRO: ', erro)
    })
    //res.send(`TEXTO: ${req.body.title} - CONTEÚDO: ${req.body.content}`)
})

/**
 * Deleta a postagem pelo id
 */

app.get('/deletar/:id', (req, res) => {
    Post.destroy({
        where: { 
            id: req.params.id 
        }
    }).then(() => {
        res.redirect('/')
    }).catch((erro) => {
        res.send('Esta postagem não existe!')
    })
})

app.get('/editar/:id', (req, res) => {
    id = req.params.id;
    res.render('edit')
})

/**
 * Atualiza a postagem pelo id
 */

app.post('/edit', (req, res) => {
    Post.update({
        titulo: req.body.title,
        content: req.body.content
    }, {
        where: { id: id },
    }).then(() => {
        res.redirect('/')
    })
})

// == Execução
app.listen(8081, () => {
	console.log('Servidor rodando na PORTA: 8081 na URL: http://localhost:8081')
})
