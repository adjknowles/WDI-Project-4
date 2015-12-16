var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/hometown';
mongoose.connect(databaseURL);

var Recommendation = require("../models/recommendation"); 
var User    = require("../models/user");

//Bernice

var recommendation1 = new Recommendation({
  category: "Cafes",
  description: "Bettys",
  url: "https://www.bettys.co.uk/tea-rooms/locations/york",
  latitude: 53.960278,
  longitude: -1.084241
})

recommendation1.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation2 = new Recommendation({
  category: "Restaurants",
  description: "Cafe Concerto",
  url: "http://www.cafeconcerto.biz/",
  latitude: 53.962589,
  longitude: -1.084367
})

recommendation2.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation3 = new Recommendation({
  category: "Pubs",
  description: "Evil Eye",
  url: "http://www.evileyelounge.com/",
  latitude: 53.961297,
  longitude: -1.083107
})

recommendation3.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation4 = new Recommendation({
  category: "Museums",
  description: "JORVIK Viking Centre",
  url: "http://jorvik-viking-centre.co.uk/",
  latitude: 53.957598,
  longitude: -1.080321
})

recommendation4.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation5 = new Recommendation({
  category: "Attractions",
  description: "York Minster",
  url: "http://yorkminster.org/home.html",
  latitude: 53.962487,
  longitude: -1.081953
})

recommendation5.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation6 = new Recommendation({
  category: "Galleries",
  description: "Castle Galleries",
  url: "http://www.castlegalleries.com/",
  latitude: 53.957155,
  longitude: -1.080138
})

recommendation6.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation7 = new Recommendation({
  category: "Parks",
  description: "Museum Gardens",
  url: "http://www.yorkshiremuseum.org.uk/york-museum-gardens/",
  latitude: 53.960972,
  longitude: -1.086655
})

recommendation7.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

//Bob

var recommendation8 = new Recommendation({
  category: "Museum",
  description: "York Castle Museum",
  url: "http://www.yorkcastlemuseum.org.uk/",
  latitude: 53.955366,
  longitude: -1.078255
}) 

recommendation8.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation9 = new Recommendation({
  category: "Museum",
  description: "National Railway Museum",
  url: "http://www.nrm.org.uk/",
  latitude: 53.960723,
  longitude: -1.096366
})

recommendation9.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation10 = new Recommendation({
  category: "Attractions",
  description: "Clifford's Tower",
  url: "http://www.english-heritage.org.uk/visit/places/cliffords-tower-york/?gclid=CKmdoIGp4MkCFUT3wgodtP4PPw&gclsrc=aw.ds",
  latitude: 53.955971,
  longitude: -1.079919
})

recommendation10.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation11 = new Recommendation({
  category: "Cafes",
  description: "Spring Espresso",
  url: "http://www.springespresso.co.uk/",
  latitude: 53.958512,
  longitude: -1.078745
})

recommendation11.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation12 = new Recommendation({
  category: "Restaurants",
  description: "The Blue Bicycle",
  url: "http://www.thebluebicycle.com/",
  latitude: 53.958103,
  longitude: -1.077959
})

recommendation12.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation13 = new Recommendation({
  category: "Parks",
  description: "Rowntree Park",
  url: "https://www.york.gov.uk/directory_record/376/rowntree_park",
  latitude: 53.948550,
  longitude: -1.081871
})

recommendation13.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var user1 = new User({
  local: {
    name: "Bernice Smith",
    image: "http://www.missinspiration.co.uk/wp-content/uploads/2012/11/Lydia-profile-e1353448732559.jpg",
    email: "bernice@bernice.com",
    password: User.encrypt("password")
  }
});

var user2 = new User({
  local: {
    name: "Bob Parker",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg",
    email: "bob@bob.com",
    password: User.encrypt("password")
  }
});

user1.recommendations.push(recommendation1);
user1.recommendations.push(recommendation2);
user1.recommendations.push(recommendation3);
user1.recommendations.push(recommendation4);
user1.recommendations.push(recommendation5);
user1.recommendations.push(recommendation6);
user1.recommendations.push(recommendation7);

user2.recommendations.push(recommendation8);
user2.recommendations.push(recommendation9);
user2.recommendations.push(recommendation10);
user2.recommendations.push(recommendation11);
user2.recommendations.push(recommendation12);
user2.recommendations.push(recommendation13);

user1.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})

user2.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})

