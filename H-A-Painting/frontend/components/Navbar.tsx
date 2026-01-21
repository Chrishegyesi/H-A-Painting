
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/installation">Installation</Link>
      <Link to="/playground">Playground</Link>
      <Link to="/support">Support</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}