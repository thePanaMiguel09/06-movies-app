import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";
import { movieAapi } from "../api/movie-api";
import { MovieDBMovieResponse } from "@/infrastucture/interface/movie.db.response.movie";
import { CompleteMovie } from "@/infrastucture/interface/movie.interface";

export const getMovieByIdAction = async (
  id: number
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieAapi.get<MovieDBMovieResponse>(`/${id}`);

    console.log('Pelicula http');

    return MovieMapper.fromTheMovieBDToCompleteMovie(data);
  } catch (error) {
    throw "Cannot load now playing movies";
  }
};
