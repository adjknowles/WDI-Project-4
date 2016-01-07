// $(function(){
//   mapApp.init();
//   // mapApp.addMarkers('startups');
//   // mapApp.addMarkers('workspaces');
// });

// var mapApp = mapApp || {};

// mapApp.init = function(){

//   mapApp.canvas = document.getElementById('googleMap');
//   mapApp.center = new google.maps.LatLng(51.507904, -0.127466)
//   mapApp.mapOptions = {
//     zoom:        13,
//     scrollwheel: false,
//     center:      mapApp.center,
//     mapTypeId:   google.maps.MapTypeId.ROADMAP
//   };

//   this.map = new google.maps.Map(mapApp.canvas, mapApp.mapOptions);

//   google.maps.event.addDomListener(window, 'resize', function(){
//     mapApp.map.setCenter(mapApp.center);
//   });

// }

// mapApp.setupAutocompleteFields = function(){
//   var fields = ["startup-search-box", "workspace-search-box", "main-search-box"];

//   $.each(fields, function(index, field) {
//     var autocomplete = new google.maps.places.Autocomplete(document.getElementById(field));

//     google.maps.event.addListener(autocomplete, 'place_changed', function(){

//       mapApp.place = autocomplete.getPlace();
//       console.log(mapApp.place);
//       var icon = mapApp.icons[field.split("-")[0]+"s"];

//       if(icon === 'mains'){
//         mapApp.map.setCenter(mapApp.place.geometry.location);
//         return;
//       }

//       var marker = new google.maps.Marker({
//         map:       mapApp.map,
//         icon:      icon,
//         animation: google.maps.Animation.DROP,
//         title:     mapApp.place.name,
//         position:  mapApp.place.geometry.location
//       });

//       var contentHTML = 
//       '<ul>' + 
//         '<li class="infowindowtitle">'+ marker.title +'</li>' + 
//         '<li class="infowindowlink"><a href="'+ marker._id +'">For more information, click here</a></li>' + 
//       '</ul>';

//       var infoWindow = new google.maps.InfoWindow({
//         content: contentHTML
//       });
//       marker.addListener('click', function(){
//         infoWindow.open(mapApp.map, marker);
//       });

//       // Recenter the map onto the newStartup position
//       mapApp.map.setCenter(mapApp.place.geometry.location);
//     });
//   })
// }

// mapApp.clearMarkers = function() {
//   for (var i = 0; i < mapApp.markers.length; i++) {
//     mapApp.markers[i].setMap(null);
//   }
//   mapApp.markers = [];
// }

// mapApp.addInfoWindowToMarker = function(marker, markerType, id){
//   var contentHTML = 
//   '<ul>' + 
//     '<li class="infowindowtitle">'+ marker.title +'</li>' +
//     '<li class="infowindowlink '+ markerType +'"><a href="#' + id + '">CLICK HERE FOR MORE INFORMATION</a></li>'+
//   '</ul>';

//   var infoWindow = new google.maps.InfoWindow({
//     content: contentHTML
//   });
//   marker.addListener('click', function(){
//     infoWindow.open(mapApp.map, marker);
//   });
//   return marker;
// }

// mapApp.addMarkerWithTimeout = function(marker, markerType, timeout) {
//   window.setTimeout(function() {
//     var position = new google.maps.LatLng(marker.latitude, marker.longitude);
//     var gmMarker = new google.maps.Marker({
//       map:       mapApp.map,
//       icon:      mapApp.icons[markerType],
//       animation: google.maps.Animation.DROP,
//       title:     marker.name,
//       position:  position
//     });
//     mapApp.markers.push(mapApp.addInfoWindowToMarker(gmMarker, markerType, marker._id), timeout);
//   });
// }