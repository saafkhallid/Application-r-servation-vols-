var express = require('express');
var router = express.Router();
var User = require('../models/index');
var db = require('../bin/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/', function(req, res, next) {
  let Vile = req.body.Vile;
  let Heure = req.body.Heure;
  let Date= req.body.Date;
  let Places=req.body.Places;

  console.log(Vile+Heure+Date+Places);
  User.create({
    Vile:Vile,
    Heure:Heure,
    Date:Date,
    Places:Places,
  }).then(() =>{
    alert("user created")
  })
  res.redirect("/users");

});
module.exports = router;
