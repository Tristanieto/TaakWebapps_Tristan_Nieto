var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Post = mongoose.model('Post');
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.RECIPE_BACKEND_SECRET });

/* GET home page. */

router.get('/API/posts',auth, function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) { return next(err); }
    res.json(posts)
  });
});

router.get('/API/posts/:id', auth ,function (req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    if (!post) {
      return next(new Error('Not found: ' + req.params.id));
    }
    res.json(post);
  });
});


router.post('/API/posts/',auth, function (req, res, next) {
  let post = new Post(req.body);
  post.save(function (err, rec) {
    if (err) { return next(err); }
    res.json(rec);
  });
});


// router.get('/', function (req, res, next) {
//   res.send("server works");
// });

// router.get('/API/recipe/', function (req, res, next) {
//   res.send("process the request here");
// });


module.exports = router;
