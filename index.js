import express, { request } from 'express';

// uma app express permite que criemos urls e endpoints para o front fazer chamadas
const app = express();

// REST API http://api.controle-de-gastos.com/trannsactions

// GET http://api.controle-de-gastos.com/trannsactions
app.get('/transactions', (request, response) => { // funcao q vai ser executada qnd a 1a chamada for recebida
    console.log('GET transactions')
    response.json([{id: 1}])
})

// GET http://api.controle-de-gastos.com/trannsactions/:id
// POST http://api.controle-de-gastos.com
// put http://api.controle-de-gastos.com

app.listen(3000, () => console.log('API rest iniciada em port 3000'))