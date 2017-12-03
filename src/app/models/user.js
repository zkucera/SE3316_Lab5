var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var UserSchema   = new Schema({
    email: {type: String, required : true, unique : true, lowercase : true},
    password: {type : String, requiered : true}
});

module.exports = mongoose.model('User', UserSchema);