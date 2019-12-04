const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require('./backend/Schemas/User.js');
const config = require("./config");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt');
opts.secretOrKey = config.secretOrKey;
opts.clientID = config.clientID;
opts.clientSecret = config.clientSecret;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
      .then(user => {
          if (user) {
              return done(null, user);
          }
          return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

passport.use(
  new GoogleStrategy({
    clientID: config.cientID,
    clientSecret: config.clientSecret,
    callbackURL: '/api/users/google/redirect'
  }, () => {

  })
);

module.exports = passport;