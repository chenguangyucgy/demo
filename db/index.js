var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/stu';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', function(){
    console.log("Connect error");
});

db.once('open', function(){
    console.log("mongoose working!!!");
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    ids: String,
    site:String ,
    Email:String,
    sex:String
});

var User = mongoose.model('User', userSchema);
module.exports.user = User;
