const express = require('express');
const router = express.Router();
//const Category = require('./home');

router.get("/vagas", (req, res)=>{
    res.render("home/home")
});
module.exports = router;