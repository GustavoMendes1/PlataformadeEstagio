const express = require('express');
const router = express.Router();
const users = require('./user');

router.get("/login", (req, res)=>{
    res.render("login/login")
});

router.post("/login/users", (req, res)=>{
    var email = req.body.email;
    var email = req.body.senha;

    if(!isNaN(email) && !isNaN(senha)){
        Category.destroy({
            where:{
                email:email,
                senha:senha
            }
        }).then(()=>{
            res.redirect("/home/home");
        }) }else{
            console.log('Erro no usuário');
        }
    
})

module.exports = router;