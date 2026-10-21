import React, { useState } from 'react';
import { Filter, Star, Clock, Wifi, Zap, Coffee, ArrowRight, Bus } from 'lucide-react';
import { MOCK_BUSES } from '../mockData';

export default function BusSearch({ searchState, onSelectBus }) {
  const [filterAC, setFilterAC] = useState('all'); // all, ac, non-ac
  const [filterTime, setFilterTime] = useState('all'); // all, morning, afternoon, evening, night
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredBuses = MOCK_BUSES.filter(bus => {
    if (filterAC === 'ac' && !bus.isAC) return false;
    if (filterAC === 'non-ac' && bus.isAC) return false;

    if (filterTime !== 'all' && bus.departurePeriod !== filterTime) return false;

    if (bus.price > maxPrice) return false;

    return true;
  });

  return (
    <div>
      {/* Route Header Banner */}
      <div className="alert-banner">
        <div>
          <strong>{searchState.from}</strong> to <strong>{searchState.to}</strong> &bull; {searchState.date} &bull; {filteredBuses.length} Buses Found
        </div>
        <span style={{ fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' }}>Modify Search</span>
      </div>

      <div className="search-layout">
        {/* Sidebar Filters */}
        <aside className="filter-sidebar">
          <div className="filter-heading">
            <span><Filter size={18} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Filters</span>
            <button 
              style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.8rem', cursor: 'pointer' }}
              onClick={() => { setFilterAC('all'); setFilterTime('all'); setMaxPrice(1000); }}
            >
              Reset All
            </button>
          </div>

          {/* AC / Non-AC */}
          <div className="filter-group">
            <div className="filter-heading">Bus Type</div>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="acFilter" 
                checked={filterAC === 'all'} 
                onChange={() => setFilterAC('all')} 
              /> All Types
            </label>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="acFilter" 
                checked={filterAC === 'ac'} 
                onChange={() => setFilterAC('ac')} 
              /> AC Buses
            </label>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="acFilter" 
                checked={filterAC === 'non-ac'} 
                onChange={() => setFilterAC('non-ac')} 
              /> Non-AC Buses
            </label>
          </div>

          {/* Departure Time */}
          <div className="filter-group">
            <div className="filter-heading">Departure Time</div>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="timeFilter" 
                checked={filterTime === 'all'} 
                onChange={() => setFilterTime('all')} 
              /> Any Time
            </label>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="timeFilter" 
                checked={filterTime === 'morning'} 
                onChange={() => setFilterTime('morning')} 
              /> Morning (6 AM - 12 PM)
            </label>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="timeFilter" 
                checked={filterTime === 'afternoon'} 
                onChange={() => setFilterTime('afternoon')} 
              /> Afternoon (12 PM - 6 PM)
            </label>
            <label className="checkbox-label">
              <input 
                type="radio" 
                name="timeFilter" 
                checked={filterTime === 'evening'} 
                onChange={() => setFilterTime('evening')} 
              /> Evening (6 PM - 11 PM)
            </label>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <div className="filter-heading">Max Price: ₹{maxPrice}</div>
            <input 
              type="range" 
              min="300" 
              max="1000" 
              step="50" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </aside>

        {/* Bus List */}
        <main>
          {filteredBuses.length === 0 ? (
            <div className="bus-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <Bus size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
              <h3>No buses match your filter criteria</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Try adjusting your price range or bus type options.
              </p>
            </div>
          ) : (
            filteredBuses.map((bus) => (
              <div key={bus.id} className="bus-card">
                <div className="bus-header">
                  <div>
                    <div className="bus-name">{bus.operator}</div>
                    <div className="bus-type">{bus.busType}</div>
                  </div>
                  <div className="rating-badge">
                    <Star size={12} fill="#047857" /> {bus.rating}
                  </div>
                </div>

                <div className="bus-timing-row">
                  <div className="time-box">
                    <span className="time-val">{bus.departureTime}</span>
                    <span className="time-city">{searchState.from}</span>
                  </div>

                  <div className="duration-box">
                    <span>{bus.duration}</span>
                    <div className="duration-line"></div>
                  </div>

                  <div className="time-box" style={{ textAlign: 'right' }}>
                    <span className="time-val">{bus.arrivalTime}</span>
                    <span className="time-city">{searchState.to}</span>
                  </div>
                </div>

                <div className="bus-footer">
                  <div>
                    <span className="price-tag">₹{bus.price}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '4px' }}>/seat</span>
                    <div className="seats-left">{bus.availableSeats} Seats available</div>
                  </div>

                  <button className="btn-select" onClick={() => onSelectBus(bus)}>
                    Select Bus / View Seats
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}
