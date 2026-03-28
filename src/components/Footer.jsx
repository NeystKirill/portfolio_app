import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <Link to="/">NEY<span>ST</span> KIRILL</Link>
        </div>
        <div className="footer-links">
          <a href="https://github.com/NeystKirill" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://g-index.kz" target="_blank" rel="noreferrer">g-index.kz</a>
          <a href="https://gbwc.network" target="_blank" rel="noreferrer">gbwc.network</a>
        </div>
        <div className="footer-copy">© 2026 Neyst Kirill · Full-Stack Developer · Kazakhstan</div>
      </div>
    </footer>
  );
}
