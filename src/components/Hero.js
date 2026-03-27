import React from 'react';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 2.5rem',
      maxWidth: '960px', margin: '0 auto', position: 'relative',
    }}>
      <p style={{
        fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        color: '#2d6a4f', marginBottom: '1.5rem',
        animation: 'fadeUp 0.6s ease both', animationDelay: '0.1s',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
      }}>
        <span style={{ display: 'inline-block', width: '20px', height: '1px', background: '#2d6a4f' }}></span>
        From the Bahamas, based in New York
      </p>

      <h1 style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
        lineHeight: 1.08, color: '#1a1a1a',
        marginBottom: '1.75rem',
        animation: 'fadeUp 0.6s ease both', animationDelay: '0.2s',
      }}>
        Mathematics is<br />
        the hard part —<br />
        <span style={{ color: '#2d6a4f', fontStyle: 'italic' }}>I've done it.</span>
      </h1>

      <p style={{
        fontSize: '1.05rem', color: '#6b6560', maxWidth: '520px',
        lineHeight: 1.8, marginBottom: '2.5rem',
        animation: 'fadeUp 0.6s ease both', animationDelay: '0.35s',
      }}>
        Mathematics graduate, Magna Cum Laude. I believe if you understand the math
        behind something, you've already done the hardest part. Now I'm applying that
        foundation to data — and I'm ready to learn whatever else it takes.
      </p>

      <div style={{ display: 'flex', gap: '1rem', animation: 'fadeUp 0.6s ease both', animationDelay: '0.5s' }}>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={e => e.target.style.background = '#40916c'}
          onMouseLeave={e => e.target.style.background = '#2d6a4f'}
          style={{
            padding: '0.8rem 1.75rem', background: '#2d6a4f', color: '#fff',
            border: 'none', borderRadius: '4px', fontSize: '0.85rem',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            letterSpacing: '0.04em', cursor: 'pointer', transition: 'background 0.2s',
          }}>
          View Projects
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={e => { e.target.style.borderColor = '#2d6a4f'; e.target.style.color = '#2d6a4f'; }}
          onMouseLeave={e => { e.target.style.borderColor = '#e0dbd2'; e.target.style.color = '#1a1a1a'; }}
          style={{
            padding: '0.8rem 1.75rem', background: 'transparent', color: '#1a1a1a',
            border: '1px solid #e0dbd2', borderRadius: '4px', fontSize: '0.85rem',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            letterSpacing: '0.04em', cursor: 'pointer', transition: 'all 0.2s',
          }}>
          Get in Touch
        </button>
      </div>

      {/* Math decoration */}
      <div style={{
        position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'Georgia, serif', fontSize: '0.85rem', color: '#2d6a4f',
        opacity: 0.15, lineHeight: 2.2, textAlign: 'right', userSelect: 'none',
        animation: 'fadeIn 1.2s ease both', animationDelay: '0.8s',
      }}>
        <div>∇²φ = 0</div>
        <div>φ = Σ Rₙ(r) · Θₙ(θ)</div>
        <div>z = x + iy</div>
        <div>|z| = √(x² + y²)</div>
        <div>∂²u/∂x² + ∂²u/∂y² = 0</div>
      </div>

      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '2.5rem',
        fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.1em',
        textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem',
        animation: 'fadeIn 1s ease both', animationDelay: '1s',
      }}>
        <span style={{ width: '28px', height: '1px', background: '#ccc', display: 'inline-block' }}></span>
        Scroll
      </div>
    </section>
  );
}
