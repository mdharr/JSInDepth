import { topMovies } from "./moduleB.js";

const checkMovie = function (movieName) {
    return topMovies.map(movie => movie.toUpperCase()).includes(movieName.toUpperCase())
}

export { checkMovie }