const express= require('express');

const {register,login}=require("./controllers/auth.controller.js")
const productController = require("./controllers/product.controller.js")
const app = express();



app.use(express.json());
app.use("/product",productController);
app.post('/register',register);
app.post('/login',login);
// app.get('/data',data1)

module.exports=app;
