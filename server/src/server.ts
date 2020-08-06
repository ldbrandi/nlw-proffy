import express from 'express'

const app = express()

app.use(express.json())

// Get: Buscar ou listar uma informação
// Post: Criar alguma nova informação
// Put: Atualizar uma informação existente
// Delete: Deletar uma informação existente

// Request Body: Dados para criação ou atualização de um registro
// Route Prams: Identificar qual recurso eu quero atualizar ou deletar (request.params)
//      utilizar /:id após a rota no lado do servidor
//      na chamada da api, adicionar /1 ao final da url para utilizar este parametro
// Query Params: Páginação, filtros, ordenação (request.query)
//      não é necessário nenhum ajuste na rota do lado do servidor
//      na chamada da api, adicionar ?param=value no final da URL para adicionar este parâmetros

app.get('/', (request, response) => {
    return response.json({message: 'Hello world'})
})

app.listen(3333);