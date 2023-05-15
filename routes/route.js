const {signUp} = require('../controller/ketabk')
const express = require('express');
const route = express.Router();
route.get('/signup',(req,res)=>{
    res.render('signUp.ejs')

});
route.get('/',(req,res)=>{
    res.render('index.ejs')
})
route.get('/about',(req,res)=>{
    res.render('about.ejs')
})

module.exports=route