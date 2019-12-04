const express = require('express');
const router = express.Router();
const User = require('../Schemas/User.js');
const bcrypt = require('bcryptjs');
const key = require('../../config');
const jwt = require('jsonwebtoken');
const passport = require('../../passport');

router.get('/', async (req, res) => {
  var usersFromRoutes = await User.find(function (err, allUsers) {
    if (err) return console.error(err);
  })
  res.json({ usersFromRoutes })
});


// router.get('/:id', async (req, res) => {
//     var singleUserFromRoutes = await User.find({ "username": req.params.id }, function (err, singleUser) {
//         if (err) return console.error(err);
//     })
//     console.log(singleUserFromRoutes);
//     res.json({ singleUserFromRoutes })
// });


router.post('/adduser', function (req, res) {
  try {
    var user = new User(req.body);

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        user.password = hash;

        var userFind = await User.find({ username: user.username });

        if (userFind.length !== 0) {
          res.send({ state: "The user already exists." });
        } else {
          await user.save();
          res.send({ state: "ok" });
        }
      });
    });

  } catch (e) {
    res.send(e);
  }
});

router.post('/login', async function (req, res) {
  try {
    const userFind = await User.find({ username: req.body.username });

    if (userFind.length !== 0) {
      const match = await bcrypt.compare(req.body.password, userFind[0].password);
      if (match) {
        const payload = { id: userFind._id, username: userFind.username, avatarPicture: userFind.image };
        const options = { expiresIn: 2592000 };
        jwt.sign(
          payload,
          key.secretOrKey,
          options,
          (err, token) => {
            if (err) {
              res.send({
                success: false,
                message: "There was an error"
              });
            } else {
              res.send({
                success: true,
                token: token
              });
            }
          }
        );
      }
      else
        res.send({ succes: false, message: 'Incorreect password.' });
    } else {
      res.send({ succes: false, message: "The user do not exists." });
    }
  } catch (err) {
    res.status(400).send({ state: err });
  }
});

router.get('/test', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ _id: req.user.id })
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(404).json({ error: "User does not exist!" }));
});


router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', (req, res) => {
  console.log(req.body);
  res.send("get redirected booooooooooi!");
});

module.exports = router;