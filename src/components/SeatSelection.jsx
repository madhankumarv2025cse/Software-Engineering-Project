import React from 'react';
import { ArrowLeft, Check, Shield } from 'lucide-react';

export default function SeatSelection({ bus, selectedSeats, setSelectedSeats, onProceed, onBack }) {
  // Generate sample seats layout: 6 rows of 4 seats = 24 seats (A1-A4 to F1-F4)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const occupiedSeats = ['A2', 'B4', 'C1', 'D3', 'E2', 'E3', 'F4'];

  const handleSeatClick = (seatCode) => {
    if (occupiedSeats.includes(seatCode)) return;

    if (selectedSeats.includes(seatCode)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatCode));
    } else {
      setSelectedSeats([...selectedSeats, seatCode]);
    }
  };

  const totalFare = selectedSeats.length * bus.price;

  return (
    <div>
      {/* Back link */}
      <button 
        onClick={onBack} 
        style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}
      >
        <ArrowLeft size={16} /> Back to Search Results
      </button>

      <div className="seat-selection-container">
        {/* Bus Deck Layout */}
        <div className="bus-deck">
          <div className="bus-front-bar">
            <span>DRIVER CABIN</span>
            <span style={{ fontSize: '1.2rem' }}>🚗 FRONT</span>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Click on an available seat to select or deselect.
          </p>

          <div className="seats-grid">
            {rows.map((row) => (
              <React.Fragment key={row}>
                {/* Left side 2 seats */}
                {[1, 2].map((num) => {
                  const seatCode = `${row}${num}`;
                  const isOccupied = occupiedSeats.includes(seatCode);
                  const isSelected = selectedSeats.includes(seatCode);

                  return (
                    <button
                      key={seatCode}
                      className={`seat-btn ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSeatClick(seatCode)}
                      disabled={isOccupied}
                      title={`Seat ${seatCode}`}
                    >
                      {seatCode}
                    </button>
                  );
                })}

                {/* Right side 2 seats */}
                {[3, 4].map((num) => {
                  const seatCode = `${row}${num}`;
                  const isOccupied = occupiedSeats.includes(seatCode);
                  const isSelected = selectedSeats.includes(seatCode);

                  return (
                    <button
                      key={seatCode}
                      className={`seat-btn ${isOccupied ? 'occupied' : ''} ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSeatClick(seatCode)}
                      disabled={isOccupied}
                      title={`Seat ${seatCode}`}
                    >
                      {seatCode}
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          {/* Seat Legend */}
          <div className="seat-legend">
            <div className="legend-item">
              <div className="legend-box available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="legend-box selected"></div>
              <span>Selected</span>
            </div>
            <div className="legend-item">
              <div className="legend-box occupied"></div>
              <span>Occupied</span>
            </div>
          </div>
        </div>

        {/* Selected Seats & Fare Summary Panel */}
        <div className="booking-summary-card">
          <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: 700 }}>
            Booking Summary
          </h3>

          <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, color: 'var(--secondary)' }}>{bus.operator}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{bus.busType}</div>
          </div>

          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Selected Seat(s):</span>
            <span style={{ fontWeight: 700 }}>
              {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}
            </span>
          </div>

          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Seat Count:</span>
            <span>{selectedSeats.length}</span>
          </div>

          <div className="summary-row">
            <span style={{ color: 'var(--text-muted)' }}>Ticket Price:</span>
            <span>₹{bus.price} x {selectedSeats.length}</span>
          </div>

          <div className="summary-total">
            <span>Total Fare</span>
            <span style={{ color: 'var(--primary)' }}>₹{totalFare}</span>
          </div>

          <button 
            className="btn-search btn-block" 
            disabled={selectedSeats.length === 0}
            onClick={onProceed}
            style={{ opacity: selectedSeats.length === 0 ? 0.6 : 1 }}
          >
            Continue to Passenger Details
          </button>
        </div>
      </div>
    </div>
  );
}
