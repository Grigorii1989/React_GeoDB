import { ApiService } from './ApiService';

export const FilmApi = {
    getAll: () => ApiService.get(`/movie/popular?api_key=108a3dcad1f9a8ddef8c60eac64385d7`),
    getOneById: (id) => ApiService.get(`/movie/${id}?api_key=108a3dcad1f9a8ddef8c60eac64385d7`),
    getQuery: (query) => ApiService.get(`/search/movie?api_key=108a3dcad1f9a8ddef8c60eac64385d7&language=en-US&page=1&include_adult=false&query=${query}`)
};