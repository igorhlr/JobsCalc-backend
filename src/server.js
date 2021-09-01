const express = require("express")             
const server = express()                     
const routes = require("./routes") //chamando rotas

//usando template engine
server.set('view engine', 'ejs')

//habilitar arquivos statics
server.use(express.static("public")) // css, js (arquivos publicos)

//routes
server.use(routes)  //usando rotas
                                                  
                                                  
server.listen(3000, () => console.log('rodando'))

