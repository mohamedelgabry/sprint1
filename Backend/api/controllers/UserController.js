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
module.exports.EditUser = function(req, res, next) {
    if (!Validations.isObjectId(req.params.userId)) {
        return res.status(422).json({
          err: null,
          msg: 'UserID parameter must be a valid ObjectId.',
          data: null
        });
      }
      var valid =
      (req.body.Username &&
      Validations.isString(req.body.name)) ||
      req.body.password;
    if (!valid) {
      return res.status(422).json({
        err: null,
        msg: 'Atleast username or password must be submitted',
        data: null
      });
    }
    delete req.body.createdAt;
    req.body.updatedAt = moment().toDate();

    User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body
        },
        { new: true }
      ).exec(function(err, updatedUser) {
        if (err) {
          return next(err);
        }
        if (!updatedUser) {
          return res
            .status(404)
            .json({ err: null, msg: 'User not found.', data: null });
        }
        res.status(200).json({
          err: null,
          msg: 'Data was updated successfully.',
          data: updatedUser
        });
      });
    };
