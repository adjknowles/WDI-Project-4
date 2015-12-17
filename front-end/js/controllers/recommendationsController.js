angular
.module('hometown')
.controller('RecommendationsController', RecommendationsController);

RecommendationsController.$inject = ["Recommendation", "User", "CurrentUser", "TokenService", "$window", '$stateParams', '$state']
function RecommendationsController(Recommendation, User, CurrentUser, TokenService, $window, $stateParams, $state){
  var self = this;

  self.all            = [];
  self.users          = [];
  self.recommendation = {};

  if ($window.localStorage['auth-token']) {
    self.creator = TokenService.decodeToken();
  }

  if($stateParams.id) {
    Recommendation.get({ id: $stateParams.id }, function(recommendation){
      self.showRecommendation = recommendation;
    })
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
    self.recommendation.user = self.creator._id;
    Recommendation.save(self.recommendation, function(data){
      self.all.push(data);
      self.addPin(data);
      self.recommendation = {};
    })
  }

  var map;
  var marker;
  var infowindow;

  self.init = function(){
    var canvas = document.getElementById('googleMap');
    var center = new google.maps.LatLng(51.507904, -0.127466)
    var mapStyle = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    var mapOptions = {
      zoom:        13,
      styles:      mapStyle,
      scrollwheel: false,
      center:      {lat: 53.959702, lng: -1.087802},
      mapTypeId:   google.maps.MapTypeId.ROADMAP
    };

    self.map = new google.maps.Map(canvas, mapOptions);
  }

  self.addPins = function(data){
    data.forEach(function(recommendation){
      self.addPin(recommendation);
    });
  }

  self.addPin = function(recommendation){
    var myLatLng = {lat: recommendation.latitude, lng: recommendation.longitude}
    // console.log(myLatLng)
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: self.map,
      title: 'Hello World!',
      icon: 'http://i.imgur.com/MRUQlnT.png'
    });

    marker.addListener('click', function(){
      self.markerClick(marker, recommendation);
    });
  }

  self.markerClick = function(marker, recommendation) {
    if(infowindow) infowindow.close();

    infowindow = new google.maps.InfoWindow({
      content: '<div class="infoWindow">'+
      '<h2>' + recommendation.description + '</h2>'+
      '</div>' + '<div>' + '<a href="#/recommendations/'+ recommendation._id +'">Click here for more information</a>' + '</div>'
    });

    self.map.setCenter(marker.getPosition());
    infowindow.open(self.map, marker);
  }

  // Autocomplete
  function setupGoogleMaps(){
    var field = document.getElementById("googlesearch");
    if (!field) return false;

    var searchBox = new google.maps.places.Autocomplete(field);
   
    // SearchBox event listener;
    google.maps.event.addListener(searchBox, 'place_changed', function() {
      self.place    = searchBox.getPlace();
      console.log(self.place);
      self.recommendation.latitude = self.place.geometry.location.lat();
      self.recommendation.longitude = self.place.geometry.location.lng();
      self.recommendation.city = self.place.address_components['2'].long_name;
      self.recommendation.address = self.place.formatted_address;


      var newlatlong = new google.maps.LatLng(self.place.geometry.location.lat(),self.place.geometry.location.lng());
      self.map.setCenter(newlatlong);
    })

   //Clear the searchBox when we click on it; 
   // $("#" + field).on('click', function(){
   //   $(this).val('');
   // })
  }

  setupGoogleMaps();

  self.getRecommendations();
  self.getUsers();
  self.init();

  // google.maps.event.addDomListener(window, 'load', self.init);

}