import React, { useState } from 'react';
import { LogIn, Lock, Mail, User, Shield } from 'lucide-react';

export default function LoginPage({ onLoginSuccess, onGoRegister }) {
  const [email, setEmail] = useState('rahul@example.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter your email and password');
      return;
    }
    // Check if user is admin demo
    const role = email.includes('admin') ? 'admin' : 'passenger';
    onLoginSuccess(role);
  };

  return (
    <div style={{ maxWidth: '440px', margin: '2rem auto' }}>
      <div className="form-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <LogIn size={24} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Account Login</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sign in to manage your bus bookings</p>
        </div>

        {/* Demo Credentials Helper for Viva Presentation */}
        <div style={{ background: '#f8fafc', padding: '0.6rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.2rem', border: '1px solid var(--border)' }}>
          <strong>Viva Demo Quick-fill:</strong><br />
          &bull; Passenger: <code>rahul@example.com</code><br />
          &bull; Admin: <code>admin@busreservation.com</code>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label">
              <Mail size={14} /> Email / Username
            </label>
            <input 
              type="text" 
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.2rem' }}>
            <label className="form-label" style={{ justifyContent: 'space-between' }}>
              <span><Lock size={14} style={{ verticalAlign: 'middle' }} /> Password</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', cursor: 'pointer' }} onClick={() => alert('Password reset link sent to demo email!')}>
                Forgot Password?
              </span>
            </label>
            <input 
              type="password" 
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-search btn-block">
            Sign In
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Don't have an account?{' '}
            <span 
              style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}
              onClick={onGoRegister}
            >
              Register here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
