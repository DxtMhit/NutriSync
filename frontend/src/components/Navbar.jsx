import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    { id: 'labtests', label: '🇮🇳 Lab Tests' }
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
      
      <div className="profile-dropdown" style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
        <button
          className="theme-toggle"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{ margin: 0 }}
        >
          <span>👤 Profile</span>
        </button>

        {dropdownOpen && (
          <div className="dropdown-menu">
            {session ? (
              <>
                <button 
                  className="dropdown-item" 
                  onClick={() => { setActiveSection('dashboard'); setDropdownOpen(false); }}
                >
                  Dashboard
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => { supabase.auth.signOut(); setActiveSection('overview'); setDropdownOpen(false); }}
                  style={{ color: 'var(--rose)' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button 
                className="dropdown-item" 
                onClick={() => { setActiveSection('dashboard'); setDropdownOpen(false); }}
              >
                Login
              </button>
            )}
            <div className="dropdown-divider"></div>
            <button 
              className="dropdown-item" 
              onClick={() => { toggleTheme(); setDropdownOpen(false); }}
            >
              <span className="theme-icon" style={{ fontSize: '14px' }}>{theme === 'light' ? '🌙' : '☀️'}</span>
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
