var express = require('express');
var router = express.Router();

const User = require('./../models/User');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// display users
router.get('/users', (req,res) => {
  User.find({}, (err, doc) => {
    if (err) return res.send(err)
    else {
      return res.end(JSON.stringify(doc));
    };
  });
});

// display specific user
router.get('/user/:username', (req,res) => {
  User.find({username: req.params.username}, (err,doc) => {
    if (err) return res.send(err)
    else {
      res.end(JSON.stringify(doc));
    }
  });
});

// delete a user by _id or username
router.delete('/users/:id/delete', (req,res) => {
  User.deleteOne({_id: req.params.id}, (err, result) => {
    if (err) return res.status(401).send('Could not delete')
    else {
      res.redirect('/users');
    };
  }); 
});

// create a user
router.post('/signup', (req,res) => {
  var user = {username: req.body.username,
              fname: req.body.fname,
              lname: req.body.lname
              };
  // check if username already exists
  // console.log(User.exists({username: user['username']})); //logs "Promise"???
  User.exists({username: user['username']}, (err, result) => {
    if (err) return res.send(err)
    else {
      if (result) return res.send('failed: username already exists')
      else {
        User.create(user);
        res.redirect('/users');
      };
    };
  });
});

module.exports = router;
