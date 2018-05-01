var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    inhoud: String,
    dateAdded: Date,
    addedBy: String
});

mongoose.model('Post', PostSchema);