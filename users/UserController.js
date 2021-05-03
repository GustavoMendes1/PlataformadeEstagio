const express = require('express');
const router = express.Router();
const users = require('./user');

router.get("/login", (req, res)=>{
    res.render("login/login")
});

router.post("/login/users", (req, res)=>{
    var email = req.body.email;
    var senha = req.body.senha;
   
    users.findOne({
        where:{
            email:email,
            senha:senha
        }
         
    }).then(user=>{
        //console.log(user);
        if(user.email == email && user.senha == senha) {
            res.redirect("/vagas");
        }
    }).catch(err => {
        console.error(err)
    })
    
})

module.exports = router;