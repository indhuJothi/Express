const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cookieValidator = require("./cookieValidator")
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const log = function(req,res,next){
    console.log('I am logging whenever a new request hits')
    next()
}
const timeStamp = function(req,res,next){
    req.timeStamp=new Date()
    next()
}

app.use(log)
app.use(timeStamp)


app.get('/',(req,res)=>{
    res.send(`<h1>Hello world ${req.timeStamp}</h1>`)
})

app.listen(port,()=>{console.log(`server is listening to the port ${port}`)})