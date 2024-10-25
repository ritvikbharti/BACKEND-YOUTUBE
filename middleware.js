// jab bhi server ke request accept karne se aapke laptop se bheje gaye request ko rok kar kuch aap functionality add karte ho to ye element middleware kahlata hai
const express = require('express')
const app = express()


//  miidleware
app.use((req,res,next)=>{
    console.log("middleware chala");
    // request ko aage forward karna hai
    next();
})
//  routes create karna
app.get('/', function (req, res) {
//   res.send('Hello Bhaiya kaise  hai aaplog')
    return next(new Error("Some thing went wrong"))
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
    next();
  })
app.listen(3000)