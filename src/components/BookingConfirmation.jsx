import React from 'react';
import { CheckCircle, Download, Home, Ticket, Bus, Calendar, Clock, User, ShieldCheck } from 'lucide-react';

export default function BookingConfirmation({ bookingData, onGoHome, onViewMyBookings }) {
  const handleDownloadTicket = () => {
    alert(`Downloading E-Ticket #${bookingData.bookingId}...\n\nPassenger: ${bookingData.passengerName}\nRoute: ${bookingData.route}\nSeats: ${bookingData.seats.join(', ')}\nTotal Paid: ₹${bookingData.amount}`);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Success Badge */}
      <div style={{ margin: '1.5rem 0 1rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyCenter: 'center', padding: '12px' }}>
          <CheckCircle size={40} />
        </div>
      </div>

      <h1 style={{ fontSize: '1.75rem', color: 'var(--secondary)', marginBottom: '0.4rem', fontWeight: 700 }}>
        Booking Confirmed!
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Your bus ticket has been successfully issued. A confirmation message has been sent to {bookingData.email || 'your email'}.
      </p>

      {/* E-Ticket Display */}
      <div className="ticket-card" style={{ textAlign: 'left' }}>
        <div className="ticket-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>
              <Bus size={20} /> {bookingData.busName}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {bookingData.busType || 'Volvo A/C Sleeper'}
            </div>
          </div>
          <div className="ticket-status">
            ✓ CONFIRMED
          </div>
        </div>

        <div className="ticket-grid">
          <div>
            <div className="ticket-label">BOOKING ID</div>
            <div className="ticket-val" style={{ color: 'var(--primary)', fontFamily: 'monospace', fontSize: '1.05rem' }}>
              {bookingData.bookingId}
            </div>
          </div>

          <div>
            <div className="ticket-label">PASSENGER NAME</div>
            <div className="ticket-val">{bookingData.passengerName}</div>
          </div>

          <div>
            <div className="ticket-label">ROUTE</div>
            <div className="ticket-val">{bookingData.route}</div>
          </div>

          <div>
            <div className="ticket-label">JOURNEY DATE</div>
            <div className="ticket-val">{bookingData.date}</div>
          </div>

          <div>
            <div className="ticket-label">DEPARTURE TIME</div>
            <div className="ticket-val">{bookingData.departureTime}</div>
          </div>

          <div>
            <div className="ticket-label">SEAT NUMBER(S)</div>
            <div className="ticket-val" style={{ color: 'var(--accent)' }}>
              {bookingData.seats ? bookingData.seats.join(', ') : 'A3'}
            </div>
          </div>

          <div>
            <div className="ticket-label">TOTAL AMOUNT</div>
            <div className="ticket-val">₹{bookingData.amount}</div>
          </div>

          <div>
            <div className="ticket-label">PAYMENT STATUS</div>
            <div className="ticket-val" style={{ color: '#16a34a' }}>PAID (UPI)</div>
          </div>

          <div>
            <div className="ticket-label">BOOKED ON</div>
            <div className="ticket-val">{bookingData.bookedOn || 'Today'}</div>
          </div>
        </div>

        <div style={{ background: '#f8fafc', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border)' }}>
          <span>Boarding Point: Central Bus Station, Bay #4</span>
          <span>Please carry a valid Govt ID during travel</span>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button className="btn-search" onClick={handleDownloadTicket}>
          <Download size={18} /> Download E-Ticket
        </button>

        <button className="btn-secondary" onClick={onViewMyBookings}>
          <Ticket size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> View in My Bookings
        </button>

        <button className="btn-secondary" onClick={onGoHome}>
          <Home size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Return to Home
        </button>
      </div>
    </div>
  );
}
