// Dependencies
const mongoose = require('mongoose');


// Schema - Artist and Albums 
const MusicSchema = new mongoose.Schema({
    artist: {
        name: String
    },
    albums: [{
        title: String,
        releaseYr: Date
     } ]
});


mongoose.model('Music', MusicSchema);
module.exports = mongoose.model('Music');

