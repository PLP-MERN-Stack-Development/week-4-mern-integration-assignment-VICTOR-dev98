import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex gap-4 p-4 bg-gray-100">
    <Link to="/">Home</Link>
    <Link to="/create">New Post</Link>
  </nav>
);

export default Navbar;
