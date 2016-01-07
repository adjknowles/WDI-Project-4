var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/hometown';
mongoose.connect(databaseURL);

var Recommendation = require("../models/recommendation"); 
var User    = require("../models/user");

// USERS 

var user1 = new User({
  local: {
    name: "Bernice Smith",
    image: "http://www.missinspiration.co.uk/wp-content/uploads/2012/11/Lydia-profile-e1353448732559.jpg",
    email: "bernice@bernice.com",
    password: User.encrypt("password")
  }
});

user1.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})

var user2 = new User({
  local: {
    name: "Bob Parker",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Christopher_Fabian_profile.jpg",
    email: "bob@bob.com",
    password: User.encrypt("password")
  }
});

user2.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})

var user3 = new User({
  local: {
    name: "Emily Tate",
    image: "http://www.ariadne.ac.uk/sites/default/files/profile-img/karen-fitzgibbon-2011.jpg",
    email: "emily@emily.com",
    password: User.encrypt("password")
  }
});

user3.save(function(err, user) {
 if (err) return console.log(err);
 console.log("User saved! ", user);
})


// Bernice's Recommendations

var recommendation1 = new Recommendation({
  category: "Cafes",
  description: "Bettys",
  url: "https://www.bettys.co.uk/tea-rooms/locations/york",
  address: "6-8 St. Helen’s Square, York YO1 8QP",
  city: "York",
  latitude: 53.960278,
  longitude: -1.084241,
  user: user1._id
})

recommendation1.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation2 = new Recommendation({
  category: "Restaurants",
  description: "Cafe Concerto",
  url: "http://www.cafeconcerto.biz/",
  address: "21 High Petergate, York YO1 7EN",
  city: "York",
  latitude: 53.962589,
  longitude: -1.084367,
  user: user1._id
})

recommendation2.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation3 = new Recommendation({
  category: "Pubs",
  description: "Evil Eye",
  url: "http://www.evileyelounge.com/",
  address: "42 Stonegate, York, North Yorkshire YO1 8AS",
  city: "York",
  latitude: 53.961297,
  longitude: -1.083107,
  user: user1._id
})

recommendation3.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation4 = new Recommendation({
  category: "Museums",
  description: "JORVIK Viking Centre",
  url: "http://jorvik-viking-centre.co.uk/",
  address: "Coppergate Shopping Centre, Coppergate, York YO1 9WT",
  city: "York",
  latitude: 53.957598,
  longitude: -1.080321,
  user: user1._id
})

recommendation4.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation5 = new Recommendation({
  category: "Attractions",
  description: "York Minster",
  url: "http://yorkminster.org/home.html",
  address: "Deangate, York YO1 7HH",
  city: "York",
  latitude: 53.962487,
  longitude: -1.081953,
  user: user1._id
})

recommendation5.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation6 = new Recommendation({
  category: "Galleries",
  description: "Castle Galleries",
  url: "http://www.castlegalleries.com/",
  address: "19 Castlegate, Coppergate Shopping Centre, Coppergate, York YO1 9RN",
  city: "York",
  latitude: 53.957155,
  longitude: -1.080138,
  user: user1._id
})

recommendation6.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation7 = new Recommendation({
  category: "Parks",
  description: "Museum Gardens",
  url: "http://www.yorkshiremuseum.org.uk/york-museum-gardens/",
  address: "2 Lendal, York YO1",
  city: "York",
  latitude: 53.960972,
  longitude: -1.086655,
  user: user1._id
})

recommendation7.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

// Bob's recommendations

var recommendation8 = new Recommendation({
  category: "Museum",
  description: "York Castle Museum",
  url: "http://www.yorkcastlemuseum.org.uk/",
  address: "Eye of York, York YO1 9RY",
  city: "York",
  latitude: 53.955366,
  longitude: -1.078255,
  user: user2._id
}) 

recommendation8.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation9 = new Recommendation({
  category: "Museum",
  description: "National Railway Museum",
  address: "Leeman Rd, York YO26 4XJ",
  city: "York",
  url: "http://www.nrm.org.uk/",
  latitude: 53.960723,
  longitude: -1.096366,
  user: user2._id
})

recommendation9.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation10 = new Recommendation({
  category: "Attractions",
  description: "Clifford's Tower",
  url: "http://www.english-heritage.org.uk/visit/places/cliffords-tower-york/?gclid=CKmdoIGp4MkCFUT3wgodtP4PPw&gclsrc=aw.ds",
  address: "Tower St, York YO1 9SA",
  city: "York",
  latitude: 53.955971,
  longitude: -1.079919,
  user: user2._id
})

recommendation10.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation11 = new Recommendation({
  category: "Cafes",
  description: "Spring Espresso",
  url: "http://www.springespresso.co.uk/",
  address: "45 Fossgate, York YO1 9TF",
  city: "York",
  latitude: 53.958512,
  longitude: -1.078745,
  user: user2._id
})

recommendation11.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation12 = new Recommendation({
  category: "Restaurants",
  description: "The Blue Bicycle",
  url: "http://www.thebluebicycle.com/",
  address: "31 Fossgate, York YO1 9TA",
  city: "York",
  latitude: 53.958103,
  longitude: -1.077959,
  user: user2._id
})

recommendation12.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation13 = new Recommendation({
  category: "Parks",
  description: "Rowntree Park",
  url: "https://www.york.gov.uk/directory_record/376/rowntree_park",
  address: "York, YO23",
  city: "York",
  latitude: 53.948550,
  longitude: -1.081871,
  user: user2._id
})

recommendation13.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

// Emily's recommendations

var recommendation14 = new Recommendation({
  category: "Pubs",
  description: "The Turf Tavern",
  url: "http://www.theturftavern.co.uk/",
  address: "4-5 Bath Pl, Oxford, OX1 3SU",
  city: "Oxford",
  latitude: 51.754878,
  longitude: -1.253001,
  user: user3._id
})

recommendation14.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation15 = new Recommendation({
  category: "Museums",
  description: "The Ashmolean Museum",
  url: "http://www.ashmolean.org/",
  address: "Beaumont St, Oxford OX1 2PH",
  city: "Oxford",
  latitude: 51.755481,
  longitude: -1.260047,
  user: user3._id
})

recommendation15.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

var recommendation16 = new Recommendation({
  category: "Cafes",
  description: "The Grand Cafe",
  url: "http://www.thegrandcafe.co.uk",
  address: "84 High St, Oxford, OX1 4BG",
  city: "Oxford",
  latitude: 51.752561,
  longitude: -1.250426,
  user: user3._id
})

recommendation16.save(function(err, recommendation) {
 if (err) return console.log(err);
 console.log("Recommendation saved! ", recommendation);
})

