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
    // next();

})

app.post("/create",function(req,res){
    console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{

    } )
        res.redirect("/")
});




app.listen(3000,()=>{
    console.log("its running");
    
})