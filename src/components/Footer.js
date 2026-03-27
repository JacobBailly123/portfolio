import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e0dbd2',
      padding: '2rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: '960px', margin: '0 auto',
    }}>
      <span style={{ fontSize: '0.8rem', color: '#bbb' }}>© {new Date().getFullYear()} Jacob Bailly</span>
      <span style={{ fontSize: '0.8rem', color: '#bbb' }}>
        Yonkers, NY · Built with <span style={{ color: '#2d6a4f' }}>React</span>
      </span>
    </footer>
  );
}
