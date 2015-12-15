var mongoose = require("mongoose");

var recommendationSchema = new mongoose.Schema({
  category: { type: String },
  description: { type: String },
  url: { type: String },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number }
});


var Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = Recommendation;


