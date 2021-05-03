const express = require('express');
const app = express();
const bodyparser = require("body-parser")
const connnection = require('./database/database');

const userController = require("./users/UserController");
const vagasController = require("./vagas/vagasController");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json()); 

connnection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada");
    }).catch(err => {
        console.error(err)
})

app.get("/", (req, res) => {
    res.redirect("/login")
})

app.use("/",userController);
app.use("/",vagasController);

app.listen(8081,() =>{
    console.log("Aplicação OK");
})