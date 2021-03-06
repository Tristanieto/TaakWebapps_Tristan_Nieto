var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Post = mongoose.model('Post');
let Comment = mongoose.model('Comment')
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.RECIPE_BACKEND_SECRET });

/* GET home page. */

router.get('/API/posts', auth, function (req, res, next) {
  let query = Post.find().populate('comments')
  query.exec(function (err, posts) {
    if (err) { return next(err); }
    res.json(posts)
  });
});

router.get('/API/posts/:id', auth, function (req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    if (!post) {
      return next(new Error('Not found: ' + req.params.id));
    }
    res.json(post);
  }).populate('comments');
});

router.delete('/API/posts/:post', auth, function(req, res, next){
  Comment.remove({_id: {$in: req.post.comments}}, function(err){
    if (err){
      return next(err);
    }
    req.post.remove(function(err){
      if(err){
        return next(err);
      }
      res.json(req.post)
    })
  })
});

router.param('post', function (req, res, next, id) {
  let query = Post.findById(id).populate('comments');
  query.exec(function (err, post) {
    if (err) {
      return next(err)
    }

    if (!post) {
      return next(new Error('not found ' + id))
    }

    req.post = post;
    return next();
  });
});

router.get('/API/posts/:id', function (req, res, next) {
  req.json(req.post)
});

router.post('/API/posts/:post/comments',auth, function (req, res, next) {
  let com = new Comment(req.body);
  com.addedBy = req.user.username;
  com.save(function(err, comment){
    if(err) return next(err);
    
    req.post.comments.push(comment);
    req.post.save(function(err,rec){
      if(err) return next(err);
      res.json(req.post);
    })
  })

})

router.post('/API/posts/', auth, function (req, res, next) {
  let post = new Post(req.body);
  post.addedBy = req.user.username;
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
