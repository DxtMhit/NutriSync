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

  const handleOAuthLogin = async (provider) => {
    setLoading(true);
    setMessage({ type: '', text: '' });
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (err) {
      setMessage({ type: 'error', text: err.message || `An error occurred during ${provider} authentication.` });
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

        <div style={{ display: 'flex', alignItems: 'center', margin: '24px 0 20px', color: 'var(--text3)', fontSize: '12px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
          <span style={{ padding: '0 12px', fontFamily: 'DM Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.5px' }}>or continue with</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => handleOAuthLogin('google')}
            disabled={loading}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: 'var(--surface2)',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              fontFamily: 'Instrument Sans, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'var(--surface2)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.927h6.6a5.64 5.64 0 0 1-2.446 3.702v3.08h3.947c2.307-2.127 3.644-5.26 3.644-8.638z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.957-1.08 7.943-2.915l-3.947-3.08c-1.092.733-2.488 1.168-3.996 1.168-3.073 0-5.673-2.075-6.602-4.87H1.32v3.187A11.996 11.996 0 0 0 12 24z"/>
              <path fill="#FBBC05" d="M5.398 14.303A7.166 7.166 0 0 1 5 12c0-.805.138-1.58.398-2.303V6.51H1.32A11.988 11.988 0 0 0 0 12c0 1.99.485 3.86 1.32 5.49l4.078-3.187z"/>
              <path fill="#EA4335" d="M12 4.827c1.764 0 3.348.606 4.593 1.797l3.435-3.436C17.95 1.193 15.233 0 12 0 7.32 0 3.33 2.69 1.32 6.51l4.078 3.187c.93-2.795 3.53-4.87 6.602-4.87z"/>
            </svg>
            Google
          </button>
          
          <button
            onClick={() => handleOAuthLogin('github')}
            disabled={loading}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              background: 'var(--surface2)',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              fontFamily: 'Instrument Sans, sans-serif',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.background = 'var(--surface)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.background = 'var(--surface2)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

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
