import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, SEARCH_MOVIES, LOADING, ERROR } from '../actions/movieActions';

const initialState = { movies: [], movieDetails: {}, loading: false, error: null };

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload };
        case FETCH_MOVIES:
            return { ...state, movies: action.payload, loading: false };
        case 'MOVIE_DETAILS_REQUEST':
            return { ...state, loading: true };
        case 'MOVIE_DETAILS_SUCCESS':
            return { ...state, loading: false, movieDetails: action.payload };
        case 'MOVIE_DETAILS_FAIL':
            return { ...state, loading: false, error: action.payload };
        case SEARCH_MOVIES:
            return { ...state, movies: action.payload, loading: false, error: null };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };

        default:
            return state;
    }
}
