angular
  .module('hometown')
  .controller('RecommendationsController', RecommendationsController);

RecommendationsController.$inject = ["Recommendation", "User", "CurrentUser"]
function RecommendationsController(Recommendation, User, CurrentUser){
  var self = this;

  self.all            = [];
  self.users          = [];
  self.recommendation = {}; 

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

  self.init = function(){
    var canvas = document.getElementById('googleMap');
    var center = new google.maps.LatLng(51.507904, -0.127466)
    var mapStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    var mapOptions = {
      zoom:        13,
      styles:      mapStyle,
      scrollwheel: false,
      center:      center,
      mapTypeId:   google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(canvas, mapOptions);
    console.log("length: " + self.all.length)

    for (var i = 0; i < self.all.length; i++){
      self.addPin(self.all[i]);
    }
  }

  self.addPin = function(recommendation){
    console.log("arrived")
    console.log(recommendation.description);
  }

  self.getRecommendations();
  self.getUsers();
  self.init();

  console.log(CurrentUser.getUser());
}