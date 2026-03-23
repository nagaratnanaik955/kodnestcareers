import Navbar from '@/components/Navbar';

export default function JobsPage() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>
            Open Opportunities
          </h1>
          <div className="glass" style={{ padding: '4rem', borderRadius: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem', color: 'var(--muted)' }}>
              Job listings are coming soon! We are currently onboarding top tech companies.
            </p>
          </div>
        </div>
      </section>
      
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
    </main>
  );
}
