var express = require('express');
var router = express.Router();
var assert = require('assert');
var db = require('../db');

router.get('/',function(req,res,next){
 db.user.find({},function(err,doc){
   assert.equal(err,null);
   res.render('show',{title:'Express',infos:doc});
 });
});

module.exports = router;
