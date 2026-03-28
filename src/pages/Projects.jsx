import useReveal from '../hooks/useReveal';
import './Projects.css';

const projects = [
  {
    id: 1,
    tag: 'AI · Terminal · React',
    title: 'NeyAI Terminal',
    desc: 'AI-powered terminal интерфейс с интеграцией Claude AI API. Реализован CLI-стиль UI с поддержкой real-time стриминга ответов, историей команд и кастомными темами.',
    stack: ['React', 'Claude AI', 'Node.js', 'Express', 'WebSockets'],
    github: 'https://github.com/NeystKirill/NeyAi-terminal',
    color: 'green',
    icon: '⬢',
  },
  {
    id: 2,
    tag: 'Finance · Full-Stack · Dashboard',
    title: 'Finance System',
    desc: 'Корпоративная финансовая платформа с аналитическими дашбордами, управлением транзакциями, role-based access control и JWT аутентификацией.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Recharts', 'Prisma'],
    github: 'https://github.com/NeystKirill/finance-system',
    color: 'blue',
    icon: '◈',
  },
  {
    id: 3,
    tag: 'E-Commerce · Full-Stack · Payments',
    title: 'Selling Project',
    desc: 'Полноценная e-commerce платформа с каталогом товаров, корзиной покупок, системой оплаты и панелью администратора.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/NeystKirill/Selling_Project',
    color: 'green',
    icon: '◉',
  },
  {
    id: 4,
    tag: 'Production · WebGL · Corporate',
    title: 'G-Index Hub KZ',
    desc: 'Участие в разработке платформы G-Index Hub Kazakhstan — государственного проекта для оценки бизнес-индексов в Казахстане. WebGL фон, анимации.',
    stack: ['JavaScript', 'Three.js', 'CSS3', 'HTML5'],
    live: 'https://g-index.kz',
    color: 'blue',
    icon: '⬟',
  },
  {
    id: 5,
    tag: 'Production · Corporate · International',
    title: 'GBWC Network',
    desc: 'Участие в разработке сайта Global Business Women Council — международной платформы для поддержки женского предпринимательства.',
    stack: ['JavaScript', 'React', 'CSS3', 'Responsive Design'],
    live: 'https://gbwc.network',
    color: 'green',
    icon: '⬡',
  },
];

export default function Projects() {
  useReveal();
  return (
    <div className="projects-page">
      <div className="projects-header reveal">
        <p className="section-label">// Projects</p>
        <h1 className="section-title">Мои <em>проекты</em></h1>
        <p className="projects-sub">
          От AI-терминалов до финансовых платформ — реализованные проекты с production опытом
        </p>
      </div>
      <div className="projects-list">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`project-item reveal project-${p.color}`}
            style={{transitionDelay: `${i * 0.1}s`}}
          >
            <div className="project-num">
              <span className="project-icon">{p.icon}</span>
              <span className="project-index">0{p.id}</span>
            </div>
            <div className="project-content">
              <div className="project-tag">{p.tag}</div>
              <h2 className="project-title">{p.title}</h2>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="project-actions">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="project-btn github">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-btn live">
                  <span>Live Site</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
