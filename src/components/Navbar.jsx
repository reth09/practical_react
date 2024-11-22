import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Popular Movies</Link>
            <Link to="/search">Search</Link>
        </nav>
    );
}
