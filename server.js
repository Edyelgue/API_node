const { response } = require('express');
const express = require('express');

const app = express()
app.use(express.json())

const usuarios = [];

app.get('/test', (request, response) => {
    return response.status(200).json({ status: 'online'})
})

app.get('/usuario', (request, response) => {
    const usuario = {
        nome: "Edym",
        email: "edym@gmail.com",
        telefone: "99999999999"
    }
    return response.status(200).json(usuario);
})

app.post('/usuario', (request, response) => {
    const { nome, email, telefone } = request.body;

    usuarios.push({
        nome,
        email,
        telefone
    })

    return response.json({ nome, email, telefone  })
})

app.listen(3333, () => {
    console.log('Server rodando ;)');    
})