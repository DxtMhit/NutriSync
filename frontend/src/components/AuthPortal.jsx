import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const AuthPortal = ({ onAuthSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!email || !password || (isSignUp && !fullName)) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      setLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;
        
        // Supabase signups might require email verification depending on project config
        if (data?.user && data?.session === null) {
          setMessage({
            type: 'success',
            text: 'Registration successful! Please check your email for verification link.',
          });
        } else {
          setMessage({ type: 'success', text: 'Registration successful!' });
          if (onAuthSuccess) onAuthSuccess(data.session);
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        setMessage({ type: 'success', text: 'Logged in successfully!' });
        if (onAuthSuccess) onAuthSuccess(data.session);
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'An error occurred during authentication.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', padding: '24px' }}>
      <div className="cluster-card" style={{ padding: '32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 900, color: 'var(--heading)' }}>
            {isSignUp ? 'Join NutriSync' : 'Welcome Back'}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text3)', marginTop: '4px' }}>
            {isSignUp ? 'Create your biomarker tracking account' : 'Sign in to access your dashboard'}
          </p>
        </div>

        {message.text && (
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '13px',
              border: message.type === 'error' ? '1px solid var(--rose)' : '1px solid var(--accent)',
              background: message.type === 'error' ? 'rgba(212, 93, 93, 0.05)' : 'rgba(93, 202, 126, 0.05)',
              color: message.type === 'error' ? 'var(--rose2)' : 'var(--accent)',
            }}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {isSignUp && (
            <div>
              <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace', color: 'var(--text3)', marginBottom: '6px' }}>
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface2)',
                  color: 'var(--text)',
                  outline: 'none',
                  fontSize: '13px',
                }}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace', color: 'var(--text3)', marginBottom: '6px' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--surface2)',
                color: 'var(--text)',
                outline: 'none',
                fontSize: '13px',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', fontFamily: 'DM Mono, monospace', color: 'var(--text3)', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--surface2)',
                color: 'var(--text)',
                outline: 'none',
                fontSize: '13px',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px',
              borderRadius: '6px',
              border: 'none',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'Instrument Sans, sans-serif',
              fontSize: '14px',
              marginTop: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12.5px', color: 'var(--text2)' }}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage({ type: '', text: '' });
            }}
            style={{ color: 'var(--accent)', cursor: 'pointer', fontWeight: '500' }}
          >
            {isSignUp ? 'Sign In' : 'Register'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPortal;
