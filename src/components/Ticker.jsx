import './Ticker.css';

const items = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Three.js', 'WebGL', 'PostgreSQL', 'Docker', 'GraphQL',
  'Tailwind CSS', 'Redux', 'Prisma ORM', 'Supabase', 'Claude AI',
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Three.js', 'WebGL', 'PostgreSQL', 'Docker', 'GraphQL',
  'Tailwind CSS', 'Redux', 'Prisma ORM', 'Supabase', 'Claude AI',
];

export default function Ticker() {
  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span>◆</span>{item}
          </span>
        ))}
      </div>
    </div>
  );
}
