angular
.module('hometown')
.controller('RecommendationsController', RecommendationsController);

RecommendationsController.$inject = ["Recommendation", "User", "CurrentUser", "TokenService", "$window"]
function RecommendationsController(Recommendation, User, CurrentUser, TokenService, $window){
  var self = this;

  self.all            = [];
  self.users          = [];

  if ($window.localStorage['auth-token']) {
    self.creator = TokenService.decodeToken();
    self.recommendation = {
      creator_id: self.creator._id
    };
  }

  self.getRecommendations = function(){
    Recommendation.query(function(data){
      self.addPins(data);
      return self.all = data;
    })
  }

  self.getUsers = function(){
   User.query(function(data){
    return self.users = data.users;
  });
 }

 self.add = function(){
    // self.recommendation.creator_id = self.creator._id;
    Recommendation.save(self.recommendation, function(data){
      self.all.push(data);
      self.recommendation = {};
    })
  }

  var map;
  var marker;
  var infowindow;

  var input = $('#inputLocation');
  var autocomplete = new google.maps.places.Autocomplete(input);

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

    self.map = new google.maps.Map(canvas, mapOptions);
    var myLatLng = {lat: -25.363, lng: 131.044};
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }

  google.maps.event.addListener(autocomplete, 'place_changed', function(){
    self.place = autocomplete.getPlace();
  })

  self.addPins = function(data){
    data.forEach(function(recommendation){
      self.addPin(recommendation);
    });
  }

  self.addPin = function(recommendation){
    var myLatLng = {lat: recommendation.latitude, lng: recommendation.longitude}
    console.log(myLatLng)
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: self.map,
      title: 'Hello World!'
    });

    marker.addListener('click', function(){
      self.markerClick(marker, recommendation);
    });
  }

  self.markerClick = function(marker, recommendation) {
    if(infowindow) infowindow.close();

    infowindow = new google.maps.InfoWindow({
      content: '<div class="infoWindow">'+
      '<h2>' + recommendation.category + '</h2>'+
      '</div>'
    });

    self.map.setCenter(marker.getPosition());
    infowindow.open(self.map, marker);
  }

  self.getRecommendations();
  self.getUsers();
  self.init();

}