"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      height: '4rem',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 1000,
    }}>
      <Link href="/" style={{ 
        fontSize: '1.5rem', 
        fontWeight: 800, 
        textDecoration: 'none', 
        color: 'white',
        letterSpacing: '-1px'
      }}>
        KodNest<span style={{ color: 'var(--primary)' }}>Careers</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/jobs" style={{ textDecoration: 'none', color: 'var(--muted)', fontWeight: 500 }}>Jobs</Link>
        <Link href="/companies" style={{ textDecoration: 'none', color: 'var(--muted)', fontWeight: 500 }}>Companies</Link>
        {user ? (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, color: 'white' }}>Hi, {user.name.split(' ')[0]}</span>
            <button onClick={handleLogout} className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>Logout</button>
          </div>
        ) : (
          <Link href="/auth" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>Sign In</Link>
        )}
      </div>
    </nav>
  );
}
