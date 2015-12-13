var Recommendation = require("../models/recommendation");
var User = require("../models/user");

function recommendationsIndex(req, res){
  Recommendation.find({}, function(err, recommendations) {
    if (err) return res.status(404).send(err);
    res.status(200).send(recommendations);
  });
}

function recommendationsCreate(req, res){
  var recommendation = new Recommendation(req.body.recommendation);
  recommendation.save(function(err){
    if (err) return res.status(500).send(err);
    var id = req.body.recommendation.user_id;
    User.findById(id, function(err, user){
       user.recommendations.push(recommendation);
       user.save();
       return res.status(201).send(recommendation)
    });
  });
}

function recommendationsShow(req, res){
  var id = req.params.id;

  Recommendation.findById({ _id: id }, function(err, recommendation) {
    if (err) return res.status(500).send(err);
    if (!recommendation) return res.status(404).send(err);

    res.status(200).send(recommendation);
  })
}

function recommendationsUpdate(req, res){
  var id = req.params.id;

  Recommendation.findByIdAndUpdate({ _id: id }, req.body.recommendation, function(err, recommendation){
    if (err) return res.status(500).send(err);
    if (!recommendation) return res.status(404).send(err);

    res.status(200).send(recommendation);
  })
}

function recommendationsDelete(req, res){
  var id = req.params.id;

  Recommendation.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send('done');
  })
}

module.exports = {
  recommendationsIndex:  recommendationsIndex,
  recommendationsCreate: recommendationsCreate,
  recommendationsShow:   recommendationsShow,
  recommendationsUpdate: recommendationsUpdate,
  recommendationsDelete: recommendationsDelete
}