
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var userSchema = mongoose.Schema({
   username: {
        type: String,
        trim: true,
        lowercase: true
    },
   password: {
       type: String,
         
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);

