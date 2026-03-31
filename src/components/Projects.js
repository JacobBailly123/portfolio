import React from 'react';

const projects = [
  {
    num: '01',
    title: 'SociaLink',
    tag: 'Full-Stack Web App',
    desc: 'A fully deployed social media platform — user auth, social feeds, direct messaging, friend requests, notifications, and hashtag trending. Built end to end: Vue 3 frontend on Vercel, Django REST API on Render, PostgreSQL database.',
    tags: ['Vue 3', 'Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    live: 'https://socia-link-beryl.vercel.app',
    github: 'https://github.com/JacobBailly123/SociaLink',
  },
  {
    num: '02',
    title: 'Wordle Clone',
    tag: 'Browser Game',
    desc: 'A clean recreation of Wordle in vanilla JavaScript — no frameworks, no dependencies. Custom word list, animated tile flipping, keyboard color tracking, shake animations for invalid guesses, and persistent win/lose detection.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://jacobbailly123.github.io/mywordle/',
    github: 'https://github.com/JacobBailly123/mywordle',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>Projects</p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1a1a1a', marginBottom: '3rem', lineHeight: 1.2 }}>
        Things I've built
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {projects.map(p => (
          <div key={p.num}
            style={{ background: '#fff', border: '1px solid #e0dbd2', borderRadius: '6px', padding: '2rem', transition: 'border-color 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#b7e4c7'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,106,79,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0dbd2'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', color: '#ccc', fontFamily: "'DM Serif Display', serif" }}>{p.num}</span>
                  <span style={{ fontSize: '0.72rem', color: '#2d6a4f', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#f7fdf9', border: '1px solid #b7e4c7', borderRadius: '3px', padding: '0.15rem 0.5rem' }}>{p.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.5rem', color: '#1a1a1a', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#6b6560', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.72rem', color: '#888', border: '1px solid #e0dbd2', borderRadius: '3px', padding: '0.2rem 0.6rem' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={p.live} target="_blank" rel="noreferrer"
                  style={{ fontSize: '0.78rem', color: '#2d6a4f', border: '1px solid #b7e4c7', borderRadius: '3px', padding: '0.4rem 0.9rem', textAlign: 'center', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.target.style.background = '#f7fdf9'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >Live ↗</a>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={{ fontSize: '0.78rem', color: '#888', border: '1px solid #e0dbd2', borderRadius: '3px', padding: '0.4rem 0.9rem', textAlign: 'center', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.target.style.background = '#f7f5f0'}
                  onMouseLeave={e => e.target.style.background = 'transparent'}
                >GitHub</a>
              </div>
            </div>
          </div>
        ))}

        {/* Research card */}
        <div style={{ background: '#f7fdf9', border: '1px solid #b7e4c7', borderRadius: '6px', padding: '2rem' }}>
          <p style={{ fontSize: '0.72rem', color: '#2d6a4f', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Senior Capstone Research — CMSV 2024</p>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: '#1a1a1a', marginBottom: '0.75rem' }}>
            Complex-Valued & Real-Valued SKEF Structural Functions
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#6b6560', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Under supervision of Dr. Victor A. Miroshnikov, Dept. of Mathematics & Data Analytics.
            Modeled scalar field dynamics via Laplace PDEs (∇²φ = 0) using Stationary Kinematic
            Euler-Fourier (SKEF) structural frameworks. Applied the Decomposition into Invariant
            Structures (DIS) method to reduce complex PDEs to algebraic equations. Analyzed the
            wave parameter R<sub>zn</sub> — demonstrating exponential decay in amplitude, hyperbolic
            relationships in period, and horizontal shift behavior — supported by formal proofs.
          </p>
          <a href="https://github.com/JacobBailly123/skef-research" target="_blank" rel="noreferrer"
            style={{ fontSize: '0.78rem', color: '#888', border: '1px solid #e0dbd2', borderRadius: '3px', padding: '0.4rem 0.9rem', display: 'inline-block', transition: 'background 0.2s' }}
            onMouseEnter={e => e.target.style.background = '#f7f5f0'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}
