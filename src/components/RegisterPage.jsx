import React, { useState } from 'react';
import { UserPlus, User, Mail, Phone, Lock } from 'lucide-react';

export default function RegisterPage({ onRegisterSuccess, onGoLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! You can now log in.');
    onRegisterSuccess();
  };

  return (
    <div style={{ maxWidth: '480px', margin: '2rem auto' }}>
      <div className="form-card">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <UserPlus size={24} />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Create New Account</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Join BusReserve for easy online booking</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label"><User size={14} /> Full Name</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g. Rahul Sharma" 
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label"><Mail size={14} /> Email Address</label>
            <input 
              type="email" 
              className="form-input" 
              placeholder="e.g. rahul@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label"><Phone size={14} /> Mobile Number</label>
            <input 
              type="tel" 
              className="form-input" 
              placeholder="e.g. 9876543210" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label className="form-label"><Lock size={14} /> Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label"><Lock size={14} /> Confirm Password</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="••••••••" 
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required 
            />
          </div>

          <button type="submit" className="btn-search btn-block">
            Create Account & Register
          </button>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <span 
              style={{ color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}
              onClick={onGoLogin}
            >
              Sign in here
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
