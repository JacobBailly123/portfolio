import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2.5rem', height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(247,245,240,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid #e0dbd2' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s',
      }}>
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: '#1a1a1a', letterSpacing: '0.02em' }}>
        Jacob Bailly
      </span>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {navItems.map(item => (
          <li key={item}
            onClick={() => scrollTo(item)}
            style={{ fontSize: '0.82rem', color: '#6b6560', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#2d6a4f'}
            onMouseLeave={e => e.target.style.color = '#6b6560'}
          >{item}</li>
        ))}
      </ul>
    </motion.nav>
  );
}
