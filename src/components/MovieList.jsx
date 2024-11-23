import { Link } from 'react-router-dom';
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
        <div className="container my-5 text-white">
            <h2 className="text-center mb-4 display-4 ">Movies</h2>
            <div className="d-flex flex-wrap">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div className="col-3 p-2" key={movie.id}>
                            <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                                <div className="border border-2 border-white rounded p-2">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={movie.title}
                                        className="card-img-top rounded"
                                    />
                                    <div className="card-body d-flex flex-column text-white">
                                        <h5 className=" text-truncate pt-2">{movie.title}</h5>
                                        <p className=" mt-auto">
                                            <small>Release Date: {movie.release_date}</small>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p className="text-center text-muted fs-5">No movies found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
