import React from 'react';

const skillGroups = [
  { title: 'Languages & Data', skills: ['Python', 'SQL', 'JavaScript', 'HTML / CSS', 'R (basic)'] },
  { title: 'Frameworks & Tools', skills: ['Vue 3 / Vite', 'Django REST Framework', 'Pandas & NumPy', 'Matplotlib', 'Tableau Public'] },
  { title: 'Math & Analytics', skills: ['Statistical Analysis', 'Regression Modeling', 'Linear Algebra', 'Differential Equations', 'Machine Learning (foundations)'] },
  { title: 'Dev & Workflow', skills: ['Git & GitHub', 'PostgreSQL', 'REST APIs', 'Vercel / Render', 'Agile basics'] },
];

const certs = [
  { name: 'Google Advanced Data Analytics Certificate', issuer: 'Google / Coursera', date: 'May 2024' },
  { name: 'Programming for Everybody — Python', issuer: 'University of Michigan / Coursera', date: 'Oct 2023' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>Skills</p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1a1a1a', marginBottom: '3rem', lineHeight: 1.2 }}>
        What I work with
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
        {skillGroups.map(group => (
          <div key={group.title} style={{ background: '#fff', border: '1px solid #e0dbd2', borderRadius: '6px', padding: '1.5rem' }}>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>{group.title}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {group.skills.map(s => (
                <span key={s} style={{ fontSize: '0.88rem', color: '#6b6560', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#2d6a4f', flexShrink: 0, display: 'inline-block' }}></span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid #e0dbd2', borderRadius: '6px', padding: '1.5rem' }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>Certifications</p>
        {certs.map((c, i) => (
          <div key={c.name} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0.85rem 0',
            borderTop: i === 0 ? 'none' : '1px solid #f0ede8',
          }}>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#1a1a1a', marginBottom: '0.15rem' }}>{c.name}</p>
              <p style={{ fontSize: '0.78rem', color: '#aaa' }}>{c.issuer}</p>
            </div>
            <span style={{ fontSize: '0.78rem', color: '#aaa', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{c.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
