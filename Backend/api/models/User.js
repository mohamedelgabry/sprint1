
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var userSchema = mongoose.Schema({
   username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
   password: {
       type: String,
        required: true,
         
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);

