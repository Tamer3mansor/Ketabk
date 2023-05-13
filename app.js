const express = require('express');
const body_parser = require('body-parser');
const app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.set('view engin','ejs')
require('dotenv').config();
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.listen(process.env.port,()=>{
    console.log("app listen at port 8000");
})