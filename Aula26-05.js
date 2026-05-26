const express = require('express')
const app = express();

app.use(express.json())

//let estoque = "lapis"
let estoque = [
    {nome: "lapis", valor: 1.50,  quantidde:20},
    {nome: "borracha", valor: 4.00, quantidade: 20},
    {nome: "caderno", valor: 29.99, quantidade: 30},
    {nome: "mochila", valor: 89.99, quantidade: 40}

]

const porta = 3000;

app.get('/produtos', (req, res) => {
    res.json(estoque)
})

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;

    estoque.push(novoProduto)

    res.send("produto: " + novoProduto.nome + " cadastro!")
});

app.listen(porta, () => {
    console.log ("servidor rodando na porta: " + porta)
})