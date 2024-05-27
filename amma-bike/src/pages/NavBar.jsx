import React from 'react'
import { Link } from '../Link'

function NavBar() {
    return (
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/videos">Videos</Link>
        </nav>
      );
}

export default NavBar