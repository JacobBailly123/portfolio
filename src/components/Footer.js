import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-40px' }}
      style={{
        borderTop: '1px solid #e0dbd2',
        padding: '2rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        maxWidth: '960px', margin: '0 auto',
      }}>
      <span style={{ fontSize: '0.8rem', color: '#bbb' }}>© {new Date().getFullYear()} Jacob Bailly</span>
      <span style={{ fontSize: '0.8rem', color: '#bbb' }}>
        Yonkers, NY · Built with <span style={{ color: '#2d6a4f' }}>React</span>
      </span>
    </motion.footer>
  );
}
