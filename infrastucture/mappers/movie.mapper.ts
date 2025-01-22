import { Movie } from "../interface/movie.interface";
import { Result } from "../interface/movie.db.response";

export class MovieMapper {
  static fromTheMovieBDToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };
}
