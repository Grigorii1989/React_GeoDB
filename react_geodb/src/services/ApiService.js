import axios from 'axios';

const createApiService = () => axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000
});

export const ApiService = createApiService();