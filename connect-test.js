// == Sequelize, faz as operações no banco de dados através do código no Node

const Sequelize = require('sequelize')

/**
 * @param 'app = base de dados, root = usuário, leandro1234 = senha'
 */
const sequelize = new Sequelize('app', 'root', 'leandro1234', {
    host: 'localhost',      // servidor
    dialect: 'mysql'        // tipo de banco
})

// == Testar a conexão feita com o sequelize

sequelize.authenticate().then(() => {
    console.log('Sucesso ao conectar no banco App')
}).catch((erro) => {
    console.log('Falha ao se conectar, ERRO: ', erro)
})

/** Define um model para a tabela através do método define()
 * @param 'nome da tabela'
 */

const POSTAGEM = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const USUARIO = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.TEXT
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* CRIA AS TABELAS CONFORME OS MODELS
    USUARIO.sync({force: true})
    POSTAGEM.sync({force: true})

    # COMENTAR PARA NÃO CRIAR A TABELA NOVAMENTE AO RODAR O ARQUIVO
*/

/* USUARIO.create({
    nome: 'Leandro',
    sobrenome: 'Andrade',
    idade: 35,
    email: 'leandrobe.andrade@gmail.com'
})

POSTAGEM.create({
    titulo: 'Postagem 01',
    conteudo: 'Primeira postagem por Sequelize!',

    # COMENTAR PARA NÃO ENVIAR OS DADOS NOVAMENTE PARA O BANCO
}) */