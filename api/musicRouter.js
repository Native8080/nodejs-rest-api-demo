// Dependencies
const express = require('express');
const Music = require('../models/musicModel');
const musicRouter = express.Router();

// Routes
musicRouter.get('/', (req, res) => {
    res.json({ message: 'It Works!' })
});

musicRouter.get('/artists', (req, res) => {
    Music.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json([artist, artist2]);
    });
});


// Testing
const artist = new Music({
    artist: { name: 'Dave Matthews Band' },
    albums: { 
        title: 'Under the Table and Dreaming', 
        releaseYr: new Date('Sep 27, 1994') 
    }
});

// Testing
const artist2 = new Music({
    artist: { name: 'Pearl Jam' },
    albums: { 
        title: 'Ten', 
        releaseYr: new Date('August 27, 1991') 
    }
});

// Persist to Mongo - musicAPI DB
artist.save(function (err) {
    if (err) console.log ('Error on save!')
});


module.exports = musicRouter;