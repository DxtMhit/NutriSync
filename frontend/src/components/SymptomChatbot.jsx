import React, { useState, useRef, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const SymptomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I am the NutriSync AI Symptom Analyzer. Tell me how you're feeling or list your current symptoms, and I will help map them to potential nutrient deficiencies and cofactors based on our biochemistry atlas."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      // Get current Supabase session token to verify on the backend
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;

      if (!token) {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: "You need to be signed in to converse with the Symptom Analyzer. Please log in using the Dashboard."
          }
        ]);
        setLoading(false);
        return;
      }

      // Backend API address (FastAPI server running concurrently on port 8000)
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Failed to get a response from the AI.');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${err.message}`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="bookmarks-bar" style={{ right: '80px', zIndex: 199 }}>
        <button
          className="citations-fab"
          onClick={() => setIsOpen(prev => !prev)}
          title="AI Symptom Chat"
          style={{ background: isOpen ? 'var(--accent)' : 'var(--surface2)', color: isOpen ? 'var(--bg)' : 'var(--text)' }}
        >
          🤖
        </button>
      </div>

      {/* Chat Window Popup */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '85px',
            right: '20px',
            width: '380px',
            height: '500px',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            background: 'var(--surface)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            zIndex: 1000,
            fontFamily: 'Instrument Sans, sans-serif'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--surface2)',
              display: 'flex',
              alignItems: 'center',
              justify-content: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px' }}>🤖</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--heading)' }}>Symptom Analyzer</div>
                <div style={{ fontSize: '10px', color: 'var(--accent)', fontFamily: 'DM Mono, monospace' }}>Biochemical AI Agent</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text3)',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: 'var(--bg)'
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    lineHeight: '1.4',
                    background: msg.role === 'user' ? 'var(--accent)' : 'var(--surface2)',
                    color: msg.role === 'user' ? 'var(--bg)' : 'var(--text)',
                    border: msg.role === 'user' ? 'none' : '1px solid var(--border)',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.content}
                </div>
                <span
                  style={{
                    fontSize: '9px',
                    color: 'var(--text3)',
                    marginTop: '4px',
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    fontFamily: 'DM Mono, monospace'
                  }}
                >
                  {msg.role === 'user' ? 'You' : 'NutriSync AI'}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '4px', padding: '10px' }}>
                <span className="dot" style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out' }}></span>
                <span className="dot" style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out 0.2s' }}></span>
                <span className="dot" style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'bounce 1.4s infinite ease-in-out 0.4s' }}></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Form Input Footer */}
          <form
            onSubmit={handleSendMessage}
            style={{
              padding: '12px',
              borderTop: '1px solid var(--border)',
              background: 'var(--surface2)',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              placeholder="e.g. I have muscle spasms and fatigue..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={loading}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--accent)',
                color: 'var(--bg)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '13px'
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SymptomChatbot;
