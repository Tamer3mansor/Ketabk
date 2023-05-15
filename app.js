const express = require('express');
const body_parser = require('body-parser');
const app = express();
const connection = require('./dataBase/DB')
const router = require('./routes/route');
//Middleware 
app.use(body_parser.urlencoded({ extended: false }));
app.set('view engin','ejs')
require('dotenv').config();

app.use('/',router);

app.listen(process.env.port,()=>{
    try {
        connection.connectDB(process.env.url);
        console.log("app listen at port 8000");
    } catch (error) {
        console.log(connection);
    }
    
})