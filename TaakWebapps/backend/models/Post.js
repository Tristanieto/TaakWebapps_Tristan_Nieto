var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    inhoud: String,
    dateAdded: Date
});

mongoose.model('Post', PostSchema);