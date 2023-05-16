const {signUp} = require('../controller/ketabk')
const express = require('express');
const {checkEmail , checkPassword} = require('../utiles/validator')
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
route.post('/signUp',checkEmail,checkPassword,signUp)

module.exports=route