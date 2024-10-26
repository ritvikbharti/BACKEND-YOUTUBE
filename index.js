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

app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        // console.log(filedata);
        res.render('show',{filename:req.params.filename,filedata: filedata})
        
    })
})

app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename: req.params.filename})
})
app.post("/create",function(req,res){
    console.log(req.body);
    if((req.body.title.length > 0)){

        fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
    
        } )
    }
        res.redirect("/")
});

app.post("/edit",function(req,res){
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{

        res.redirect("/");
    })
});




app.listen(3000,()=>{
    console.log("its running");
    
})