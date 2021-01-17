//servidor
const express = require ('express')
const server = express()

const {
	home, 
	pageLogin,
	login
	} = require('./pages.js')

// Configura nunjucks (html render)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// Inicio e configurações do servidor
server
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
// Configurando rota dos arquivos estaticos
.use(express.static("public"))
// Rotas da aplicação
.get("/", home)
.get('/login', pageLogin)
.post('/login', login)
// start do servidor
.listen(3000)