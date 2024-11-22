import axios from 'axios'

const API_KEY = '653f60d0b16e47ad33dd9ad4fe52f827'
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMoviesAPI = async () =>
    axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const fetchMovieDetailsAPI = async (movieId) =>
    axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

export const searchMoviesAPI = async (query) =>
    axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);

