import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">MoviesApp</Link>
        </nav>
    );
}
