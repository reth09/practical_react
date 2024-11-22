import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, LOADING, ERROR } from '../actions/movieActions';

const initialState = { movies: [], movieDetails: {}, loading: false, error: null };

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return { ...state, movies: action.payload, loading: false };
        case FETCH_MOVIE_DETAILS:
            return { ...state, movieDetails: action.payload, loading: false };
        case LOADING:
            return { ...state, loading: true };
        case ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
