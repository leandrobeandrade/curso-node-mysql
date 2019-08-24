const db = require('./db')
const post = db.sequelize.define('postagens', {            // postagens <- nome da tabela
    titulo: {
        type: db.Sequelize.STRING
    },
    content: {
        type: db.Sequelize.TEXT
    }  
})


/* 
    Após acessar a pasta models e rodar node Post é criado a tabela postagens na base de 
    dados postapp, tbm comentar o post.sync que é o método que cria a tabela, senão,
    todas as vezes que o método POST (botão postar no HTML) for clicado, será gerado a
    tabela postagens novamente zerada.
*/

// post.sync({force: true})  <- EXECUTAR APENAS 1 VEZ

module.exports = post