const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
app.get('/',(req,res)=>{
    res.send(`<p>I am  get method</p>`)
})
// app.post('/post',(req,res)=>{
//     res.send(`<p>I am  post method</p>`)
// })

// app.put('/user', function (req, res) {
//     res.send(`<h1>Got a PUT request at /user</h1>`)
//   })
// app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })
app.listen(port,()=>{
    console.log(`server listening in the port ${port}`)
})
