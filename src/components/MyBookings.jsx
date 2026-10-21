import React, { useState } from 'react';
import { Ticket, Calendar, MapPin, Bus, Ban, Eye, X } from 'lucide-react';

export default function MyBookings({ bookingsList, setBookingsList, onViewTicket }) {
  const [selectedTicketModal, setSelectedTicketModal] = useState(null);

  const handleCancelBooking = (id) => {
    if (window.confirm(`Are you sure you want to cancel booking #${id}?`)) {
      setBookingsList(prev => prev.map(b => b.bookingId === id ? { ...b, status: 'Cancelled' } : b));
    }
  };

  return (
    <div>
      <h2 className="section-title">
        <Ticket size={24} style={{ color: 'var(--primary)' }} /> My Bookings
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        Manage your active bus reservations, download tickets, or request cancellations.
      </p>

      {bookingsList.length === 0 ? (
        <div className="bus-card" style={{ textAlign: 'center', padding: '3rem' }}>
          <Ticket size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
          <h3>No bookings found</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>You haven't booked any bus tickets yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bookingsList.map((booking) => (
            <div key={booking.bookingId} className="bus-card" style={{ marginBottom: 0 }}>
              <div className="bus-header">
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontFamily: 'monospace', fontWeight: 700 }}>
                    #{booking.bookingId}
                  </div>
                  <div className="bus-name" style={{ marginTop: '2px' }}>{booking.busName}</div>
                  <div className="bus-type">{booking.route}</div>
                </div>

                <div>
                  <span className={`badge-${booking.status === 'Confirmed' ? 'active' : booking.status === 'Completed' ? 'active' : 'warning'}`}>
                    {booking.status}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem', margin: '1rem 0', background: '#f8fafc', padding: '0.8rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Date</span>
                  <strong>{booking.date}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Seats</span>
                  <strong>{Array.isArray(booking.seats) ? booking.seats.join(', ') : booking.seats}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Passenger</span>
                  <strong>{booking.passengerName}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Fare</span>
                  <strong style={{ color: 'var(--primary)' }}>₹{booking.amount}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => onViewTicket(booking)}
                >
                  <Eye size={14} /> View Ticket
                </button>

                {booking.status === 'Confirmed' && (
                  <button 
                    className="btn-secondary" 
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem', color: 'var(--danger)', borderColor: '#fecaca', display: 'flex', alignItems: 'center', gap: '4px' }}
                    onClick={() => handleCancelBooking(booking.bookingId)}
                  >
                    <Ban size={14} /> Cancel Booking
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
