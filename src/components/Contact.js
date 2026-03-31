import React, { useState } from 'react';

const contactLinks = [
  { label: 'Email', value: 'jacobbailly2002@gmail.com', href: 'mailto:jacobbailly2002@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jacob-bailly', href: 'https://www.linkedin.com/in/jacob-bailly-22a31919a' },
  { label: 'GitHub', value: 'github.com/JacobBailly123', href: 'https://github.com/JacobBailly123' },
  { label: 'Location', value: 'Yonkers, NY. Open to NYC roles.', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:jacobbailly2002@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle = {
    background: '#fff', border: '1px solid #e0dbd2', borderRadius: '4px',
    padding: '0.75rem 1rem', color: '#1a1a1a', fontSize: '0.9rem',
    fontFamily: "'DM Sans', sans-serif", outline: 'none',
    transition: 'border-color 0.2s', width: '100%',
  };

  return (
    <section id="contact" style={{ padding: '8rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>Contact</p>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1a1a1a', marginBottom: '1rem', lineHeight: 1.2 }}>
        Let's talk
      </h2>
      <p style={{ color: '#6b6560', fontSize: '0.95rem', marginBottom: '3rem', maxWidth: '480px', lineHeight: 1.7 }}>
        Open to data analyst, junior data science, and quant research roles in NYC.
        If you have something in mind, reach out.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
          {submitted && (
            <div style={{ padding: '0.85rem 1rem', background: '#f7fdf9', border: '1px solid #b7e4c7', borderRadius: '4px', color: '#2d6a4f', fontSize: '0.88rem' }}>
              ✓ Your mail client should have opened. If not, email me directly.
            </div>
          )}
          {[{ name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' }].map(f => (
            <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label style={{ fontSize: '0.72rem', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{f.label}</label>
              <input
                style={inputStyle} name={f.name} type={f.type}
                value={form[f.name]} onChange={handleChange}
                placeholder={f.placeholder} required
                onFocus={e => e.target.style.borderColor = '#2d6a4f'}
                onBlur={e => e.target.style.borderColor = '#e0dbd2'}
              />
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label style={{ fontSize: '0.72rem', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message</label>
            <textarea
              style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
              name="message" value={form.message} onChange={handleChange}
              placeholder="Tell me about the opportunity..."
              required
              onFocus={e => e.target.style.borderColor = '#2d6a4f'}
              onBlur={e => e.target.style.borderColor = '#e0dbd2'}
            />
          </div>
          <button type="submit"
            style={{ padding: '0.85rem 2rem', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.85rem', fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '0.04em', cursor: 'pointer', transition: 'background 0.2s', alignSelf: 'flex-start' }}
            onMouseEnter={e => e.target.style.background = '#40916c'}
            onMouseLeave={e => e.target.style.background = '#2d6a4f'}
          >Send Message</button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {contactLinks.map((item, i) => (
            <div key={item.label} style={{ padding: '1.25rem 0', borderBottom: i < contactLinks.length - 1 ? '1px solid #f0ede8' : 'none' }}>
              <span style={{ fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>{item.label}</span>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  style={{ fontSize: '0.92rem', color: '#6b6560', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#2d6a4f'}
                  onMouseLeave={e => e.target.style.color = '#6b6560'}
                >{item.value}</a>
              ) : (
                <span style={{ fontSize: '0.92rem', color: '#6b6560' }}>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}