var mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    _inhoud: String,
    addedBy: String
});

mongoose.model('Comment', CommentSchema);