import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('nutrisync-theme');
    if (saved === 'light') {
      setTheme('light');
      document.documentElement.classList.add('light');
    }

    // Load active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen to session modifications
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle('light');
    const newTheme = isLight ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('nutrisync-theme', newTheme);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'clusters', label: 'Codependency Clusters' },
    { id: 'vitamins', label: 'Vitamins' },
    { id: 'minerals', label: 'Minerals' },
    { id: 'chains', label: 'Deficiency Chains' },
    { id: 'sources', label: 'Food Sources' },
    { id: 'tips', label: 'Supplementing Smart' },
    { id: 'labtests', label: '🇮🇳 Lab Tests' },
    { id: 'dashboard', label: '👤 Dashboard' }
  ];

  return (
    <nav>
      <a className="nav-brand" href="#">NutriSync <span>atlas</span></a>
      
      <button 
        className="menu-toggle-btn" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-tabs ${menuOpen ? 'open' : ''}`}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`nav-tab ${activeSection === tab.id ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(tab.id);
              setMenuOpen(false);
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="theme-toggle" onClick={toggleTheme}>
          <span className="theme-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
          <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
        </div>
        {session && (
          <button
            className="theme-toggle"
            onClick={() => {
              supabase.auth.signOut();
              setActiveSection('overview');
            }}
            style={{ color: 'var(--rose)' }}
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
