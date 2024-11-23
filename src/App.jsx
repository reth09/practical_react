import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
    const isAuthenticated = true;

    return (
        <div>
            <MovieSearch />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/search" element={<MovieSearch />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
                <Route
                    path="/details/:id"
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <MovieDetails />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
