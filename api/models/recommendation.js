var mongoose = require("mongoose");

var recommendationSchema = new mongoose.Schema({
  category: { type: String },
  description: { type: String },
  url: { type: String },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
});


var Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = Recommendation;


