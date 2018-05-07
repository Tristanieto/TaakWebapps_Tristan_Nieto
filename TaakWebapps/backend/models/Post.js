var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    title: String,
    inhoud: String,
    dateAdded: {type: Date,default: Date.now},
    addedBy: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment'
    }]
});

mongoose.model('Post', PostSchema);