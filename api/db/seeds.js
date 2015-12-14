var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/hometown';
mongoose.connect(databaseURL);

var Recommendation = require("../models/recommendation"); 
var User    = require("../models/user");

var recommendation1 = new Recommendation({
  category: "Cafes",
  description: "Bettys",
  url: "https://www.bettys.co.uk/tea-rooms/locations/york"
})

recommendation1.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation2 = new Recommendation({
  category: "Restaurants",
  description: "Cafe Concerto",
  url: "http://www.cafeconcerto.biz/"
})

recommendation2.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation3 = new Recommendation({
  category: "Pubs",
  description: "Evil Eye",
  url: "http://www.evileyelounge.com/"
})

recommendation3.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation4 = new Recommendation({
  category: "Museums",
  description: "JORVIK Viking Centre",
  url: "http://jorvik-viking-centre.co.uk/"
})

recommendation4.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation5 = new Recommendation({
  category: "Attractions",
  description: "York Minster",
  url: "http://yorkminster.org/home.html"
})

recommendation5.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation6 = new Recommendation({
  category: "Galleries",
  description: "Castle Galleries",
  url: "http://www.castlegalleries.com/"
})

recommendation6.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation7 = new Recommendation({
  category: "Parks",
  description: "Museum Gardens",
  url: "http://www.yorkshiremuseum.org.uk/york-museum-gardens/"
})

recommendation7.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var user1 = new User({
  local: {
    name: "Bernice Smith",
    image: "http://www.missinspiration.co.uk/wp-content/uploads/2012/11/Lydia-profile-e1353448732559.jpg",
    email: "bernice@bernice.com",
    password: "password"
  }
});

user1.recommendations.push(recommendation1);
user1.recommendations.push(recommendation2);
user1.recommendations.push(recommendation3);
user1.recommendations.push(recommendation4);
user1.recommendations.push(recommendation5);
user1.recommendations.push(recommendation6);
user1.recommendations.push(recommendation7);

user1.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})

