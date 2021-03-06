var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var cookieParser   = require("cookie-parser");
var methodOverride = require("method-override");
var jwt            = require('jsonwebtoken');
var request        = require('request-promise');
var expressJWT     = require('express-jwt');
var app            = express();

var config         = require('./config/config');
var Recommendations= require('./models/recommendation')
var User           = require('./models/user');
var secret         = require('./config/config').secret;

mongoose.connect(config.database);

require('./config/passport')(passport);

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(express.static(__dirname + "/public"));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login',    methods: ['POST'] },
      { url: '/api/register', methods: ['POST'] },
      { url: '/',             methods: ['GET'] }
    ]
  }));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({message: 'Unauthorized request.'});
  }
  next();
});

app.post('/auth/facebook', function(req, res) {
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.FACEBOOK_API_SECRET,
    redirect_uri: config.appUrl + "/"
  };

  // step 1, we make a request to facebook for an access token
  request.get({ url: config.oauth.facebook.accessTokenUrl, qs: params, json: true })
    .then(function(accessToken) {
      // step 2, we use the access token to get the user's profile data from facebook's api
      return request.get({ url: config.oauth.facebook.profileUrl, qs: accessToken, json: true });
    })
    .then(function(profile) {
      // step 3, we try to find a user in our database by their email
      return User.findOne({ email: profile.email })
        .then(function(user) {
          // if we find the user, we set their facebookId and picture to their profile data
          if(user) {
            user.facebookId = profile.id;
            user.picture = user.picture || profile.picture.data.url;
          }
          else {
            // otherwise, we create a new user record with the user's profile data from facebook
            user = new User({
              facebookId: profile.id,
              name: profile.name,
              picture: profile.picture.data.url,
              email: profile.email
            });
          }
          // either way, we save the user record
          return user.save();
        })
      })
      .then(function(user) {
        // step 4, we create a JWT and send it back to our angular app
        var token = jwt.sign(user, config.secret, { expiresIn: '24h' });
        return res.send({ token: token });
      })
      .catch(function(err) {
        // we handle any errors here
        return res.status(500).json({ error: err });
      });
});

var routes = require('./config/routes');
app.use("/api", routes);

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});

app.listen(process.env.PORT || 3000);