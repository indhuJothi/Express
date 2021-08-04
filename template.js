var express = require ('express')
var path = require('path')
var app = express()
var dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
app.set("views", './views');
app.set("view engine", "pug");


app.get('/',(req,res)=>{
     res.render('indexx',{title:'Hey',message : "Hello there!"})
})

app.listen(port,()=>console.log(`server is listening to the ${port}`))