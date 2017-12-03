var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var tempUserSchema   = new Schema({
    email : String,
    password: String
});

module.exports = mongoose.model('User', tempUserSchema);