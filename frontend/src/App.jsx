import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OverviewSection from './components/OverviewSection';
import ClustersSection from './components/ClustersSection';
import VitaminsSection from './components/VitaminsSection';
import MineralsSection from './components/MineralsSection';
import ChainsSection from './components/ChainsSection';
import SourcesSection from './components/SourcesSection';
import TipsSection from './components/TipsSection';
import LabTestsSection from './components/LabTestsSection';
import CitationsModal from './components/CitationsModal';
import { BookmarksProvider } from './context/BookmarksContext';
import './index.css';

// Fullstack Auth, Dashboard, and AI elements
import { supabase } from './supabaseClient';
import AuthPortal from './components/AuthPortal';
import DashboardSection from './components/DashboardSection';
import SymptomChatbot from './components/SymptomChatbot';

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem('nutrisync-section') || 'overview';
  });
  const [citationsOpen, setCitationsOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    localStorage.setItem('nutrisync-section', activeSection);
  }, [activeSection]);

  useEffect(() => {
    // Check local active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for state sign-in/sign-out changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BookmarksProvider>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main">
        {activeSection === 'overview' && <Hero />}

        <div className={`section ${activeSection === 'overview' ? 'active' : ''}`}>
          <OverviewSection onOpenCitations={() => setCitationsOpen(true)} />
        </div>

        <div className={`section ${activeSection === 'clusters' ? 'active' : ''}`}>
          <ClustersSection />
        </div>

        <div className={`section ${activeSection === 'vitamins' ? 'active' : ''}`}>
          <VitaminsSection />
        </div>

        <div className={`section ${activeSection === 'minerals' ? 'active' : ''}`}>
          <MineralsSection />
        </div>

        <div className={`section ${activeSection === 'chains' ? 'active' : ''}`}>
          <ChainsSection />
        </div>

        <div className={`section ${activeSection === 'sources' ? 'active' : ''}`}>
          <SourcesSection />
        </div>

        <div className={`section ${activeSection === 'tips' ? 'active' : ''}`}>
          <TipsSection />
        </div>

        <div className={`section ${activeSection === 'labtests' ? 'active' : ''}`}>
          <LabTestsSection />
        </div>

        <div className={`section ${activeSection === 'dashboard' ? 'active' : ''}`}>
          {session ? (
            <DashboardSection />
          ) : (
            <AuthPortal onAuthSuccess={(sess) => setSession(sess)} />
          )}
        </div>
      </main>

      {/* Citations FAB */}
      <div className="bookmarks-bar">
        <button
          className="citations-fab"
          onClick={() => setCitationsOpen(true)}
          title="View References"
        >
          📚
        </button>
      </div>

      <CitationsModal isOpen={citationsOpen} onClose={() => setCitationsOpen(false)} />
      
      {/* Floating AI chatbot panel (rendered only when authenticated) */}
      {session && <SymptomChatbot />}
    </BookmarksProvider>
  );
}

export default App;
