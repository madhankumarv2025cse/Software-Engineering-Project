import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Landmark, Lock, CheckCircle2 } from 'lucide-react';

export default function PaymentPage({ bus, selectedSeats, passengerInfo, searchState, onPaymentSuccess, onBack }) {
  const [paymentMethod, setPaymentMethod] = useState('upi'); // upi, card, netbanking
  const totalAmount = selectedSeats.length * bus.price;

  return (
    <div>
      <button 
        onClick={onBack} 
        style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}
      >
        <ArrowLeft size={16} /> Back to Passenger Details
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem' }}>
        {/* Payment Methods Box */}
        <div className="form-card" style={{ maxWidth: '100%' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Select Payment Method
          </h2>

          <div className="payment-tabs">
            <button 
              className={`pay-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('upi')}
            >
              <Smartphone size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> UPI / QR Code
            </button>
            <button 
              className={`pay-tab ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Credit / Debit Card
            </button>
            <button 
              className={`pay-tab ${paymentMethod === 'netbanking' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('netbanking')}
            >
              <Landmark size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Net Banking
            </button>
          </div>

          {paymentMethod === 'upi' && (
            <div style={{ padding: '1rem 0' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Enter your Virtual Payment Address (UPI ID) or select popular apps:
              </p>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">UPI ID / VPA</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. name@okhdfcbank / 9876543210@paytm" 
                  defaultValue="rahul.sharma@upi"
                />
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ padding: '0.4rem 0.8rem', background: '#f1f5f9', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>Google Pay</span>
                <span style={{ padding: '0.4rem 0.8rem', background: '#f1f5f9', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>PhonePe</span>
                <span style={{ padding: '0.4rem 0.8rem', background: '#f1f5f9', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>Paytm</span>
              </div>
            </div>
          )}

          {paymentMethod === 'card' && (
            <div className="form-grid" style={{ padding: '1rem 0' }}>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Cardholder Name</label>
                <input type="text" className="form-input" placeholder="Name on card" defaultValue={passengerInfo.name || "Rahul Sharma"} />
              </div>
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Card Number</label>
                <input type="text" className="form-input" placeholder="4532 •••• •••• 8912" defaultValue="4532 9812 3456 8912" />
              </div>
              <div className="form-group">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-input" placeholder="MM/YY" defaultValue="08/29" />
              </div>
              <div className="form-group">
                <label className="form-label">CVV</label>
                <input type="password" className="form-input" placeholder="•••" defaultValue="123" />
              </div>
            </div>
          )}

          {paymentMethod === 'netbanking' && (
            <div style={{ padding: '1rem 0' }}>
              <div className="form-group">
                <label className="form-label">Select Your Bank</label>
                <select className="form-select">
                  <option>State Bank of India (SBI)</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                  <option>Punjab National Bank</option>
                </select>
              </div>
            </div>
          )}

          <div style={{ marginTop: '1rem', background: '#f8fafc', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lock size={14} color="var(--accent)" />
            <span>Simulated Payment Gateway (UI Only - No real charges will occur)</span>
          </div>

          <button 
            className="btn-search btn-block"
            onClick={onPaymentSuccess}
            style={{ marginTop: '1.5rem', height: '48px', fontSize: '1.05rem', background: 'var(--accent)' }}
          >
            Pay ₹{totalAmount} & Confirm Booking
          </button>
        </div>

        {/* Booking Summary Sidebar */}
        <div className="booking-summary-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 700 }}>Fare Summary</h3>
          
          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Route:</span>
            <span style={{ fontWeight: 600 }}>{searchState.from} → {searchState.to}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Bus:</span>
            <span>{bus.operator}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Date:</span>
            <span>{searchState.date}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Seats:</span>
            <span style={{ fontWeight: 700 }}>{selectedSeats.join(', ')}</span>
          </div>
          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Passenger:</span>
            <span>{passengerInfo.name || 'Rahul Sharma'}</span>
          </div>

          <div className="summary-total">
            <span>Total Payable:</span>
            <span style={{ color: 'var(--primary)' }}>₹{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
