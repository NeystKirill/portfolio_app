import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import useReveal from '../hooks/useReveal';
import './Home.css';

export default function Home() {
  useReveal();
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero">
        <p className="hero-eyebrow">Full-Stack Developer // Kazakhstan</p>
        <h1 className="hero-title">
          <span className="g">NEY</span><span className="idx">ST</span><br />
          <span className="sub">KIRILL</span>
        </h1>
        <p className="hero-subtitle">Frontend · Backend · WebGL · AI Integration</p>
        <p className="hero-desc">
          Создаю высококачественные веб-приложения с использованием современных технологий.
          Специализируюсь на React, Node.js, Three.js и интеграции AI решений.
        </p>
        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-outline">Contact Me</Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item reveal">
            <div className="stat-num">15<span>+</span></div>
            <div className="stat-label">Technologies</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item reveal" style={{transitionDelay:'.1s'}}>
            <div className="stat-num">3<span>+</span></div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item reveal" style={{transitionDelay:'.2s'}}>
            <div className="stat-num">2<span>+</span></div>
            <div className="stat-label">Production Sites</div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* FEATURED SECTION */}
      <section className="home-featured">
        <div className="section-header reveal">
          <p className="section-label">// Featured Work</p>
          <h2 className="section-title">Ключевые <em>проекты</em></h2>
        </div>
        <div className="featured-grid">
          <div className="featured-card reveal">
            <div className="featured-tag">AI · Terminal</div>
            <h3 className="featured-title">NeyAI Terminal</h3>
            <p className="featured-desc">
              AI-powered terminal интерфейс с интеграцией Claude AI. 
              Интерактивный CLI-стиль UI с real-time ответами.
            </p>
            <div className="featured-stack">
              <span>React</span><span>Claude AI</span><span>Node.js</span>
            </div>
            <a href="https://github.com/NeystKirill/NeyAi-terminal" target="_blank" rel="noreferrer" className="featured-link">
              View on GitHub <span>→</span>
            </a>
          </div>
          <div className="featured-card reveal" style={{transitionDelay:'.1s'}}>
            <div className="featured-tag">Finance · Dashboard</div>
            <h3 className="featured-title">Finance System</h3>
            <p className="featured-desc">
              Полноценная финансовая платформа с аналитикой, дашбордами и
              role-based access control.
            </p>
            <div className="featured-stack">
              <span>React</span><span>PostgreSQL</span><span>JWT</span>
            </div>
            <a href="https://github.com/NeystKirill/finance-system" target="_blank" rel="noreferrer" className="featured-link">
              View on GitHub <span>→</span>
            </a>
          </div>
          <div className="featured-card reveal" style={{transitionDelay:'.2s'}}>
            <div className="featured-tag">E-Commerce · Full-Stack</div>
            <h3 className="featured-title">Selling Project</h3>
            <p className="featured-desc">
              Полноценная платформа для продаж с каталогом товаров, корзиной
              и системой оплаты.
            </p>
            <div className="featured-stack">
              <span>Next.js</span><span>Prisma</span><span>Stripe</span>
            </div>
            <a href="https://github.com/NeystKirill/Selling_Project" target="_blank" rel="noreferrer" className="featured-link">
              View on GitHub <span>→</span>
            </a>
          </div>
        </div>
        <div className="home-all-projects reveal">
          <Link to="/projects" className="btn-outline">All Projects</Link>
        </div>
      </section>
    </div>
  );
}
