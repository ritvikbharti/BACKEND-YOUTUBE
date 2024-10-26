const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
// setting up the ejs in view engine
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render("index");

})
//  : is used for dynamic routing we can replace username with any word
app.get("/profile/:username",(req,res)=>{
    res.send(`Welcome ${req.params.username}`);
})

app.get("/author/:username/:age", (req, res) => {
    res.send(`Welcome ${req.params.username}, your age is ${req.params.age}`);
});



app.listen(3000,()=>{
    console.log("its running");
    
})