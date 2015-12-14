angular
  .module('hometown')
  .controller('RecommendationsController', RecommendationsController);

RecommendationsController.$inject = ["Recommendation", "User", "CurrentUser"]
function RecommendationsController(Recommendation, User, CurrentUser){
  var self = this;

  self.all     = [];
  self.users   = [];
  self.project = {}; 

  self.getRecommendations = function(){
    Recommendation.query(function(data){
      return self.all = data;
    })
  }

  self.getUsers = function(){
     User.query(function(data){
      return self.users = data.users;
    });
  }

  self.add = function(){
    var recommendation = { recommendation: self.recommendation }
    Recommendation.save(recommendation, function(data){
      self.all.push(data);
      self.recommendation = {};
    })
  }

  self.getRecommendations();
  self.getUsers();

  console.log(CurrentUser.getUser());
}