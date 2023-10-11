const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    res.removeHeader('dashboard')
})



app.get('/', (req, res) => {
    const usuario ={
        nome: "igor",
        Profissao: "estudante",
        idade: "22"

    }

    const auth = false

    res.render('home', { usuario, auth })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})