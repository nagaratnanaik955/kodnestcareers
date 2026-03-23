import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Feature Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <FeatureCard 
              title="AI Matching" 
              description="Our proprietary algorithm matches your skills with the perfect role."
              icon="⚡"
            />
            <FeatureCard 
              title="Global Network" 
              description="Access to thousands of companies ranging from startups to Fortune 500."
              icon="🌐"
            />
            <FeatureCard 
              title="Career Coaching" 
              description="Get personalized feedback on your portfolio and interview performance."
              icon="📈"
            />
          </div>
        </div>
      </section>
      
      <footer style={{ 
        padding: '4rem 0', 
        borderTop: '1px solid var(--glass-border)', 
        textAlign: 'center',
        color: 'var(--muted)',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 KodNest Careers. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="glass" style={{
      padding: '2.5rem',
      borderRadius: '24px',
      transition: 'var(--transition)',
      cursor: 'default',
    }}>
      <div style={{
        fontSize: '2rem',
        marginBottom: '1.5rem',
        background: 'rgba(255, 255, 255, 0.05)',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{description}</p>
    </div>
  );
}
