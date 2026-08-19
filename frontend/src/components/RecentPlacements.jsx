import './RecentPlacements.css';

const students = [
  { name: 'Sneha Patil',     comp: 'TCS',        role: 'Software Engineer',    pkg: '7.5 LPA', img: '/ind_female_1.png' },
  { name: 'Rohan Deshmukh', comp: 'Infosys',     role: 'System Engineer',      pkg: '6.5 LPA', img: '/ind_male_1.png' },
  { name: 'Mayur Wakode',   comp: 'Capgemini',   role: 'Analyst',              pkg: '6.0 LPA', img: '/ind_male_2.png' },
  { name: 'Pooja Tayade',   comp: 'Wipro',       role: 'Project Engineer',     pkg: '4.5 LPA', img: '/ind_female_2.png' },
  { name: 'Omkar Khandare', comp: 'Cognizant',   role: 'Programmer Analyst',   pkg: '4.0 LPA', img: '/ind_male_3.png' },
];

<<<<<<< HEAD
export default function RecentPlacements({ onOpenPlacements }) {
=======
export default function RecentPlacements() {
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
  return (
    <section className="placements">
      <div className="placements-header">
        <h3>Recent Placements</h3>
<<<<<<< HEAD
        <a href="/Placements" className="view-all" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/Placements'); if(onOpenPlacements) onOpenPlacements(); }}>View All Students &rarr;</a>
=======
        <a href="#" className="view-all">View All Students &rarr;</a>
>>>>>>> c64ada1de75afc67d5344d7afacaffa7dd74b777
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