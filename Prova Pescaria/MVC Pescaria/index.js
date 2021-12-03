const express = require('express')
const cors = require('cors')

const router = express.Router()
const app = express()

app.use(cors())
app.use(express.json())

const funcionario_read = require('./route/pescador_route.js')
app.use(funcionario_read)

app.use('/', router)
app.listen(3000, ()=>{
    console.log('Rodando na porta 3000')
})