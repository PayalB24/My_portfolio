
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyle = {
    color: 'white',
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  const activeStyle = {
    color: '#a855f7',
    fontSize: '1.2rem',
    textDecoration: 'none',
  };

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow py-4"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: '1.4rem',
            letterSpacing: '1px',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: '#a855f7' }}>Payal</span>{' '}
          <span style={{ color: '#ffffff' }}>Borde</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {routes.map((route, index) => (
              <li className="nav-item" key={route.name}>
                <Link
                  className="nav-link"
                  to={route.path}
                  style={currentPath === route.path ? activeStyle : linkStyle}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
