import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/create">Create Blog</Link>
    </nav>
  );
}

export default Navbar;