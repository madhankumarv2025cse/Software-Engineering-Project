import React from 'react';
import { ArrowLeft, User, Phone, Mail, Calendar, ShieldCheck } from 'lucide-react';

export default function PassengerDetails({ passengerInfo, setPassengerInfo, selectedSeats, bus, onProceed, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passengerInfo.name || !passengerInfo.mobile || !passengerInfo.email) {
      alert('Please fill in all required passenger fields.');
      return;
    }
    onProceed();
  };

  return (
    <div>
      <button 
        onClick={onBack} 
        style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}
      >
        <ArrowLeft size={16} /> Back to Seat Selection
      </button>

      <div className="form-card">
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
          Passenger Information
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Enter the traveler details for ticket issuance.
        </p>

        {/* Selected Seat Tag Info */}
        <div className="alert-banner" style={{ marginBottom: '1.5rem' }}>
          <div>
            <strong>Selected Seat(s):</strong> {selectedSeats.join(', ')} &bull; {bus.operator}
          </div>
          <div><strong>Fare:</strong> ₹{selectedSeats.length * bus.price}</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">
                <User size={15} /> Primary Passenger Full Name *
              </label>
              <input 
                type="text"
                className="form-input"
                placeholder="e.g. Rahul Sharma"
                value={passengerInfo.name}
                onChange={(e) => setPassengerInfo({ ...passengerInfo, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Calendar size={15} /> Age *
              </label>
              <input 
                type="number"
                className="form-input"
                placeholder="e.g. 26"
                min="5"
                max="100"
                value={passengerInfo.age}
                onChange={(e) => setPassengerInfo({ ...passengerInfo, age: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Gender *</label>
              <select 
                className="form-select"
                value={passengerInfo.gender}
                onChange={(e) => setPassengerInfo({ ...passengerInfo, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <Phone size={15} /> Mobile Number *
              </label>
              <input 
                type="tel"
                className="form-input"
                placeholder="e.g. 9876543210"
                value={passengerInfo.mobile}
                onChange={(e) => setPassengerInfo({ ...passengerInfo, mobile: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Mail size={15} /> Email Address *
              </label>
              <input 
                type="email"
                className="form-input"
                placeholder="e.g. rahul@example.com"
                value={passengerInfo.email}
                onChange={(e) => setPassengerInfo({ ...passengerInfo, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-secondary" onClick={onBack}>
              Back
            </button>
            <button type="submit" className="btn-search">
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
