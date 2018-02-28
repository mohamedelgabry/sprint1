
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcryptjs')   

var userSchema = mongoose.Schema({
   username: {
        type: String,
        trim: true,
        lowercase: true
    },
   password: {
       type: String
         
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date
});


userSchema.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
})     

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema);

