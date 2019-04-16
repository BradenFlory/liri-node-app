// read and set any environment variables with the dotenv package
require("dotenv").config();

// import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access your keys information

var axios = require("axios");
var inquirer = require("inquirer")

var argOne = process.argv[2];
var argTwo = process.argv[3];

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("The movie's title is: " + response.data.imdbTitle);
        console.log("The movie's rating is: " + response.data.imdbRating);

    }
);


var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";



var spotifyMusic = function (trackQuery) {
    var spotify = require("spotify");

    spotify.search({ type: "track", query: trackQuery }, function (error, data) {
        if (error) {
            console.log("There is an error: " + error);
        } else {
            for (var i = 0; i < data.tracks.items[0].artist.length; i++) {
                if (i === 0) {
                    console.log("Artist(s): " + data.tracks.items[0].artists[i].name);
                } else {
                    console.log("       " + data.tracks.items[0].artists[i].name);
                }
            }
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview Link: " + data.tracks.items[0].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        }
    });
}

spotifyMusic();








var getMovie = function () {
    // ask user for a movie to rate
    var request = requre("request");
    inquirer.prompt([

        {
            type: 'input',
            name: 'movieInput',
            message: 'What movie do you wnat information on?'
        }

    ]).then(function (response) {

        axios.get("http://www.omdbapi.com/?t=" + response.movieInput + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                console.log('Rating: ' + response.data.imdbRating);
                console.log('Description: ' + response.data.Plot);
            }
        );
    });

}