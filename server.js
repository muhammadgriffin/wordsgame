console.log("Hello from log")

const express = require('express')

const app = express()

const PORT = 80

const HOST = '0.0.0.0'

app.get('/',(req,res)=>{
    res.send("Hello Ensias 9\n")
})

app.listen(PORT,HOST)

console.log(`running on ${HOST}:${PORT} `)