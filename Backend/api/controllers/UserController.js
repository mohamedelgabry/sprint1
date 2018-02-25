var mongoose = require('mongoose'),
  moment = require('moment'),
  passport = require('passport'),
  Validations = require('../utils/Validations'),
  User = mongoose.model('User');

  module.exports.register = function(req,res){
      User.register(new User({username: req.body.username}), req.body.password, function(err, account) {
        if (err) {
            res.status(422).json({
                err: err,
                msg: 'User already exists',
                data: null
              });
              return;        
            }
        passport.authenticate('local')(req, res, function () {
            res.status(200).json({
                err: null,
                msg: 'Registered successfully',
                data: null
              });
        });
      });
  }

  module.exports.login =  passport.authenticate('local'),function(req,res){
    console.log('In Login');    
    res.send(req.session);
  }

  module.exports.logout = function(req,res){
    req.loogout();
}