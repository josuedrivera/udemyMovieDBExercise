console.log("connected");

var movies = [
    {
        title: "In Bruges",
        hasWatched: false,
        rating: "n/a"
    },
    {
        title: "Jumanji 2",
        hasWatched: true,
        rating: 3.5
    },
    {
        title: "Frozen",
        hasWatched: true,
        rating: 4.5
    }
]

// movies.forEach(function(movie){
//     var result = "You have ";
//     if(movie.hasWatched) {
//         result += "watched ";
//     } else {
//         result += "not seen "
//     }
//     result += "\"" + movie.title + "\" - ";
//     result += movie.rating + "/5 stars";
//     console.log(result);
// });

//refactored
function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen "
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + "/5 stars";
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie));
 });