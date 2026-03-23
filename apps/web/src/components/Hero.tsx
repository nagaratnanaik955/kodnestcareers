import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{
      padding: '10rem 0 6rem 0',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div className="container">
        <span style={{
          background: 'rgba(99, 102, 241, 0.1)',
          color: 'var(--primary)',
          padding: '0.5rem 1rem',
          borderRadius: '100px',
          fontSize: '0.9rem',
          fontWeight: 600,
          marginBottom: '2rem',
          display: 'inline-block',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}>
          New: AI-Powered Job Matching
        </span>
        
        <h1 className="gradient-text" style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          letterSpacing: '-2px'
        }}>
          Land Your Dream Job <br /> In Tech Faster.
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted)',
          maxWidth: '600px',
          margin: '0 auto 3rem auto',
          lineHeight: 1.8
        }}>
          Connect with world-class companies, optimize your resume with AI, and accelerate your career with KodNest.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/jobs" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Opportunities</Link>
          <button className="btn-secondary">Upload Resume</button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </section>
  );
}
