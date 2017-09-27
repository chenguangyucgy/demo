var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('show', { title: 'inset' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
    db.user.update({_id:req.body._id}, {$set: req.body}, function (err) {
    assert.equal(err,null);
    res.redirect("/show");
  });
});

module.exports = router;
