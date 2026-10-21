import React from 'react';
import { Bus, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
            <Bus size={20} color="var(--primary)" /> BusTicket Reservation System
          </div>
          <p style={{ fontSize: '0.85rem' }}>
            Software Engineering Project Demo &bull; Academic UI/Frontend Implementation
          </p>
        </div>

        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Designed for Academic Viva & Project Presentation</div>
          <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
            Flow: Home → Search → Seats → Passenger → Payment → Confirmation → My Bookings
          </div>
        </div>
      </div>
    </footer>
  );
}
