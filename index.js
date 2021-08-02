var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.send(`<h1>Hello world</h1>`)
})
const port =3000
app.listen(port,()=>{
    console.log(`Server is listening to the ${port} ...`)
})