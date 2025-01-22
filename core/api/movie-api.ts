import axios from 'axios'

export const movieAapi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'es-ES',
        api_key: '73fd3723887dada491f6bc76a3dba19c'
    }
})