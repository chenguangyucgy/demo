var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3001);
var router = express.Router();
var assert = require('assert');
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inset', { title: 'inset' });
  // console.log(req.query.name);
});


router.post('/',function(req,res,next){
  var user = new db.user(req.body);
  user.save(function(err, result){
   assert.equal(null,err);
   res.redirect("/");
  });

});

module.exports = router;
