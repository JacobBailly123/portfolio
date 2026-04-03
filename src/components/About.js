import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const viewport = { once: true, margin: '-60px' };

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
        <motion.p variants={fadeUp} style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2d6a4f', marginBottom: '1rem' }}>About</motion.p>
        <motion.h2 variants={fadeUp} style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1a1a1a', marginBottom: '3rem', lineHeight: 1.2 }}>
          The math came first.<br /><span style={{ fontStyle: 'italic', color: '#2d6a4f' }}>Everything else followed.</span>
        </motion.h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
          <div style={{
            width: '100%', aspectRatio: '3/4', background: '#f0ede8',
            border: '1px solid #e0dbd2', borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '0.5rem',
          }}>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '4rem', color: '#d5d0c8' }}>JB</span>
            <span style={{ fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.1em' }}>Photo coming soon</span>
          </div>

          <div style={{ display: 'flex', gap: '0', marginTop: '1.5rem', border: '1px solid #e0dbd2', borderRadius: '4px', overflow: 'hidden', background: '#fff' }}>
            {[{ num: '3.78', label: 'GPA' }, { num: '#1', label: 'Math Dept.' }, { num: '2024', label: 'Graduated' }].map((s, i) => (
              <div key={s.label} style={{
                flex: 1, padding: '1.25rem', textAlign: 'center',
                borderRight: i < 2 ? '1px solid #e0dbd2' : 'none',
              }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.6rem', color: '#2d6a4f' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', color: '#aaa', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
        >
          <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: '#6b6560', lineHeight: 1.85 }}>
            I grew up in the Bahamas and came to New York to study mathematics, not because it was practical,
            but because I genuinely love it. I graduated{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 500 }}>Magna Cum Laude</strong> from the College of
            Mount Saint Vincent and was awarded the{' '}
            <strong style={{ color: '#1a1a1a', fontWeight: 500 }}>Mathematics Department Medal</strong>{' '}
            as the highest performing student in my graduating class.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: '#6b6560', lineHeight: 1.85 }}>
            My view is simple: if you understand the mathematics behind something, you've already done the hard part.
            That's what drives my interest in data: it's applied math, and math is something I've put real
            time into understanding.
          </motion.p>
          <motion.p variants={fadeUp} style={{ fontSize: '1rem', color: '#6b6560', lineHeight: 1.85 }}>
            I'm building toward a career where I can keep growing quantitatively. The workforce is evolving fast,
            AI, automation, new tools, and I'm not intimidated by that. I have the analytical foundation and
            I'm ready to layer on whatever technical skills the role demands.
          </motion.p>

          <motion.div variants={fadeUp} style={{ marginTop: '0.5rem', padding: '1.25rem 1.5rem', background: '#f7fdf9', border: '1px solid #b7e4c7', borderRadius: '4px' }}>
            <p style={{ fontSize: '0.72rem', color: '#2d6a4f', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Senior Capstone Research
            </p>
            <p style={{ fontSize: '0.92rem', color: '#6b6560', lineHeight: 1.7 }}>
              Authored research on <em>Complex-Valued & Real-Valued SKEF Structural Functions</em> under
              the supervision of Dr. Victor A. Miroshnikov, analyzing scalar field dynamics via Laplace PDEs
              using the Decomposition into Invariant Structures (DIS) method and conducting parametric wave
              analysis across exponential, hyperbolic, and shift behaviors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
