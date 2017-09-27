var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inset', { title: 'inset' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
    db.user.find({_id:req.body._id},function(err,doc){
    assert.equal(err,null);
    res.render('update',{title:'Update',infos:doc});
  });
});

module.exports = router;
