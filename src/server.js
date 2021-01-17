//servidor
const express = require ('express')
const server = express()

const {
	home, 
	pageLogin,
	login,
	mentorPage
	} = require('./pages.js')

// Configura nunjucks (html render)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

// Inicio e configurações do servidor
server
.use(express.json()) // for parsing application/json
.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
// Configurando rota dos arquivos estaticos
.use(express.static("public"))
// Rotas da aplicação
.get("/", home)
.get('/login', pageLogin)
.post('/login', login)
.get('/mentor', mentorPage)
// start do servidor
.listen(3000)