import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/projects',label: 'Projects' },
  { to: '/skills',  label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">NEY<span>ST</span></Link>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.to}>
            <Link to={l.to} className={pathname === l.to ? 'active' : ''}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-badge">
        <span className="status-dot-nav" />
        Available for hire
      </div>
    </nav>
  );
}
