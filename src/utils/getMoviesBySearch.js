export const getMoviesBySearch = (movies,value) => {
    const filteredMovies = value && value.length > 0 ? movies.filter(movie =>  movie.name && movie.name.toLowerCase().includes(value.toLowerCase())) : movies;
    return filteredMovies;

}
