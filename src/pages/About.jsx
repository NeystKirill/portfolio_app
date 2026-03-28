import useReveal from '../hooks/useReveal';
import './About.css';

export default function About() {
  useReveal();
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="section-label reveal">// О себе</p>
        <h1 className="about-heading reveal">
          Full-Stack Developer<br/><em>& Creative Coder</em>
        </h1>
      </section>

      <section className="about-grid">
        <div className="about-text reveal">
          <p>
            Привет! Я — Kirill, full-stack разработчик из Казахстана. Специализируюсь на
            создании современных, высокопроизводительных веб-приложений с акцентом
            на UI/UX качество и технические решения.
          </p>
          <p>
            Работаю с React и современным JS-экосистемой на фронтенде, Node.js и PHP
            на бэкенде. Увлекаюсь WebGL / Three.js для создания интерактивной 3D-графики
            и интеграцией AI-решений в продакшн проекты.
          </p>
          <p>
            Принимал участие в разработке <a href="https://g-index.kz" target="_blank" rel="noreferrer">g-index.kz</a> и <a href="https://gbwc.network" target="_blank" rel="noreferrer">gbwc.network</a> — 
            реальных продакшн сайтов для государственных и международных организаций Казахстана.
          </p>
          <div className="about-links">
            <a href="https://github.com/NeystKirill" target="_blank" rel="noreferrer" className="btn-primary">GitHub Profile</a>
          </div>
        </div>
        <div className="about-card reveal" style={{transitionDelay:'.15s'}}>
          <div className="mirror-card">
            <div className="mirror-label">// Identity</div>
            <div className="mirror-rows">
              {[
                ['Role', 'Full-Stack Developer'],
                ['Location', 'Kazakhstan 🇰🇿'],
                ['Focus', 'React · Node.js · WebGL'],
                ['AI', 'Claude AI Integration'],
                ['Specialty', '3D · Interactive UI'],
              ].map(([k,v]) => (
                <div className="mirror-row" key={k}>
                  <span className="mirror-key">{k}</span>
                  <span className="mirror-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-production reveal">
        <div className="section-header">
          <p className="section-label">// Production</p>
          <h2 className="section-title">Участие в <em>реальных проектах</em></h2>
        </div>
        <div className="production-grid">
          <a href="https://g-index.kz" target="_blank" rel="noreferrer" className="production-card">
            <div className="production-icon">⬟</div>
            <h3>g-index.kz</h3>
            <p>Платформа G-Index Hub Kazakhstan — цифровая среда для оценки бизнес-показателей</p>
            <span className="production-tag">Production · Kazakhstan</span>
          </a>
          <a href="https://gbwc.network" target="_blank" rel="noreferrer" className="production-card">
            <div className="production-icon">◉</div>
            <h3>gbwc.network</h3>
            <p>Global Business Women Council — международная бизнес-сеть</p>
            <span className="production-tag">Production · International</span>
          </a>
        </div>
      </section>
    </div>
  );
}
