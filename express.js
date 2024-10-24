// Express is used for everything from recieving the request and giving the response
//  framework

const express = require('express')
const app = express()

//  routes create karna
app.get('/', function (req, res) {
  res.send('Hello Bhaiya kaise  hai aaplog')
})
app.get('/profile',(req,res)=>{
    res.send("Welcome to my profile")
})
app.listen(3000)