import useReveal from '../hooks/useReveal';
import './Skills.css';

const skillGroups = [
  {
    label: '// Frontend',
    icon: '◈',
    color: 'green',
    skills: [
      { name: 'React / Hooks', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Three.js / WebGL', level: 78 },
      { name: 'Tailwind CSS / SCSS', level: 90 },
      { name: 'Redux / Zustand', level: 82 },
    ],
  },
  {
    label: '// Backend',
    icon: '⬢',
    color: 'blue',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'PHP / FastRoute', level: 75 },
      { name: 'REST API / GraphQL', level: 88 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'JWT / OAuth', level: 85 },
      { name: 'PostgreSQL / MySQL', level: 80 },
    ],
  },
  {
    label: '// Tools & DevOps',
    icon: '⬟',
    color: 'green',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 70 },
      { name: 'Vercel / Netlify', level: 88 },
      { name: 'Cloudflare Workers', level: 72 },
      { name: 'Supabase / MongoDB', level: 78 },
      { name: 'Claude AI Integration', level: 90 },
    ],
  },
];

const badges = [
  'JavaScript ES6+','TypeScript','React','Next.js','Vite','Tailwind CSS',
  'SCSS','Three.js','Babylon.js','WebGL','Material-UI','shadcn/ui',
  'Recharts','Node.js','Express.js','PHP','REST API','GraphQL',
  'JWT','Bcrypt','Zod','OAuth','Prisma ORM','PostgreSQL','MySQL',
  'MongoDB','Supabase','Git','Docker','Vercel','Netlify','Cloudflare',
  'CI/CD','Swagger','Postman','Python','Claude AI',
];

export default function Skills() {
  useReveal();
  return (
    <div className="skills-page">
      <div className="skills-header reveal">
        <p className="section-label">// Skills</p>
        <h1 className="section-title">Tech <em>Stack</em></h1>
        <p className="skills-sub">
          Полный спектр технологий для разработки современных веб-приложений
        </p>
      </div>

      <div className="skills-groups">
        {skillGroups.map((g, gi) => (
          <div key={g.label} className={`skill-group reveal skill-group--${g.color}`} style={{transitionDelay: `${gi * 0.15}s`}}>
            <div className="skill-group-header">
              <span className="skill-group-icon">{g.icon}</span>
              <span className="skill-group-label">{g.label}</span>
            </div>
            <div className="skill-bars">
              {g.skills.map((s, si) => (
                <div key={s.name} className="skill-bar-item">
                  <div className="skill-bar-meta">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ '--w': `${s.level}%`, animationDelay: `${gi * 0.15 + si * 0.05}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-badges-section reveal">
        <p className="section-label">// All Technologies</p>
        <div className="skills-badges">
          {badges.map((b, i) => (
            <div key={b} className="skill-badge" style={{animationDelay: `${i * 0.02}s`}}>
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
