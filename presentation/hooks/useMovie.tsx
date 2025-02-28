import { getMovieByIdAction } from "@/core/movie/getMoviByID.action"
import {getCreditsByID} from '@/core/actions/credits/getCreditsByMovie'
import { useQuery } from "@tanstack/react-query"



export const UseMovies  =(id: number) =>  {

    const movieQuery = useQuery({
        queryKey: ["movie", id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    const creditsQuery = useQuery({
        queryKey: ["movie",'cast', id],
        queryFn: () => getCreditsByID(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        movieQuery,
        creditsQuery
    }
}
