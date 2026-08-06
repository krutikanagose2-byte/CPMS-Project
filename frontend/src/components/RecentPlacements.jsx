import './RecentPlacements.css';

const students = [
  { name: 'Sneha Patil',     comp: 'TCS',        role: 'Software Engineer',    pkg: '7.5 LPA', img: 'https://i.pravatar.cc/150?img=32' },
  { name: 'Rohan Deshmukh', comp: 'Infosys',     role: 'System Engineer',      pkg: '6.5 LPA', img: 'https://i.pravatar.cc/150?img=14' },
  { name: 'Mayur Wakode',   comp: 'Capgemini',   role: 'Analyst',              pkg: '6.0 LPA', img: 'https://i.pravatar.cc/150?img=22' },
  { name: 'Pooja Tayade',   comp: 'Wipro',       role: 'Project Engineer',     pkg: '4.5 LPA', img: 'https://i.pravatar.cc/150?img=45' },
  { name: 'Omkar Khandare', comp: 'Cognizant',   role: 'Programmer Analyst',   pkg: '4.0 LPA', img: 'https://i.pravatar.cc/150?img=56' },
];

export default function RecentPlacements() {
  return (
    <section className="placements">
      <div className="placements-header">
        <h3>Recent Placements</h3>
        <a href="#" className="view-all">View All Students &rarr;</a>
      </div>
      <div className="placements-grid">
        {students.map((s, i) => (
          <article className="placement-card" key={i}>
            <img src={s.img} alt={s.name} className="stud-img" />
            <div className="card-body">
              <div className="stud-name">{s.name}</div>
              <div className="stud-company">{s.comp}</div>
              <div className="stud-role">{s.role}</div>
              <div className="stud-pkg">Package: {s.pkg}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}