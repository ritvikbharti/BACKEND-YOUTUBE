const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
// setting up the ejs in view engine
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        // console.log(files);
        res.render("index",{files:files});
        
    })

})



app.listen(3000,()=>{
    console.log("its running");
    
})