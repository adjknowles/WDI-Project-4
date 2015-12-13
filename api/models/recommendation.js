var mongoose = require("mongoose");

var recommendationSchema = mongoose.Schema({
  cafes: {
    description: { type: String },
    website: { type: String }
  },
  restaurants: {
    description: { type: String },
    website: { type: String }
  },
  pubs: {
    description: { type: String },
    website: { type: String }
  },
  museums: {
    description: { type: String },
    website: { type: String }
  },
  attractions: {
    description: { type: String },
    website: { type: String }
  },
  galleries: {
    description: { type: String },
    website: { type: String }
  },
  parks: {
    description: { type: String },
    website: { type: String }
  }
});

module.exports = mongoose.model('Recommendation', recommendationSchema);


