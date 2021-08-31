const express = require("express")             //recebendo  uma 'função' express = servidor npm 
const server = express()                      //chamada para execução do servidor express

//request, response
server.get('/', (request, response) => {
  console.log('resposta pro backend')

  return response.send('resposta pro frontend')
})
                                                  //chamando servidor na porta 3000 
                                                  //segundo argumento rodando no bash
server.listen(3000, () => console.log('rodando')) 
