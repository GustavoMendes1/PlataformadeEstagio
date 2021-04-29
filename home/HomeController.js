const express = require('express');
const router = express.Router();
//const Category = require('./home');

router.get("/home", (req, res)=>{
    res.render("home/home")
});

module.exports = router;