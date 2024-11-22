import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../actions/movieActions';

export default function MovieList() {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (loading)
        return (
            <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="text-center my-5 text-danger">
                <p>Error: {error}</p>
            </div>
        );

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Popular Movies</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-3 col-sm-6 my-3" key={movie.id}>
                        <div className="card movie-card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="movie-title">{movie.title}</h5>
                                <p className="movie-info">Release Date: {movie.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
