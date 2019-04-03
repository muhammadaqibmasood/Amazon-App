var mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const UserSchema =  mongoose.Schema({
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    cart:[{type:String,
    }]
  });
  const User=mongoose.model('User', UserSchema);
  module.exports =User
  