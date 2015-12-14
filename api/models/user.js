var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');
var Recommendation = mongoose.model('Recommendation');

var userSchema = new mongoose.Schema({
  local: {
    name: { type: String },
    image: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  },
  recommendations: [Recommendation.schema]
});

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

var User = mongoose.model("User", userSchema);
module.exports = User;