import { movieAapi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastucture/interface/credits.response";
import { CastMapper } from "@/infrastucture/mappers/credit.mapper";

export const getCreditsByID = async (
  id: number
) => {
  try {
    const { data } = await movieAapi.get<CreditsResponse>(`/${id}/credits`);

    console.log("Pelicula http");

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    throw "Cannot load credits";
  }
};
