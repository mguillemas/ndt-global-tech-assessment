require('dotenv').config()
const express = require("express")
const { json } = require('express/lib/response')
const { api } = require('./src/routes')
const app = express()

const { PORT } = process.env

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

app.use('/api', api)
// app.post('/endpoint', function(req,res) {
//     const {inputOne, inputTwo } = req.body
//     console.log(inputOne)
//     const request = JSON.parse(req)
//     res.send(JSON.stringify(request))
// })

app.get('*', function(req,res) {
    res.status(404).send('Not Found!')
})

