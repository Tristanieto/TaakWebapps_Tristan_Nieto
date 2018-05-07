var mongoose = require('mongoose');

let CommentSchema = new mongoose.Schema({
    inhoud: String,
    addedBy: String,
});

mongoose.model('Comment', CommentSchema);