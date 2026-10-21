import React from 'react';
import { Search, MapPin, Calendar, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { CITIES, POPULAR_ROUTES } from '../mockData';

export default function HomePage({ searchState, setSearchState, onSearch }) {
  const handleSwap = () => {
    setSearchState(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const handleRouteClick = (route) => {
    setSearchState(prev => ({
      ...prev,
      from: route.from,
      to: route.to
    }));
    onSearch();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Bus Ticket Reservation System</h1>
        <p className="hero-tagline">Book your bus journey quickly, securely, and easily</p>

        {/* Search Widget */}
        <div className="search-box">
          <div className="form-group">
            <label className="form-label">
              <MapPin size={16} /> From Location
            </label>
            <select 
              className="form-select"
              value={searchState.from}
              onChange={(e) => setSearchState({ ...searchState, from: e.target.value })}
            >
              {CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <MapPin size={16} /> To Location
            </label>
            <select 
              className="form-select"
              value={searchState.to}
              onChange={(e) => setSearchState({ ...searchState, to: e.target.value })}
            >
              {CITIES.filter(c => c !== searchState.from).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              <Calendar size={16} /> Journey Date
            </label>
            <input 
              type="date" 
              className="form-input"
              value={searchState.date}
              onChange={(e) => setSearchState({ ...searchState, date: e.target.value })}
            />
          </div>

          <button className="btn-search" onClick={onSearch}>
            <Search size={18} /> Search Buses
          </button>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 className="section-title">
          <span>Popular Bus Routes</span>
        </h2>
        <div className="routes-grid">
          {POPULAR_ROUTES.map((route) => (
            <div key={route.id} className="route-card" onClick={() => handleRouteClick(route)}>
              <img src={route.image} alt={`${route.from} to ${route.to}`} className="route-img" />
              <div className="route-content">
                <div className="route-header">
                  <span>{route.from} → {route.to}</span>
                  <span className="route-price">₹{route.price}</span>
                </div>
                <div className="route-details">
                  <span>{route.duration}</span>
                  <span>{route.busesAvailable} Buses Daily</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section>
        <h2 className="section-title">Why Choose BusReserve?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="feature-title">Secure & Instant Booking</h3>
            <p className="feature-desc">Get instant ticket confirmations with zero hassle and total peace of mind.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock size={24} />
            </div>
            <h3 className="feature-title">Real-Time Schedules</h3>
            <p className="feature-desc">Accurate departure timings, live tracking updates, and verified bus operators.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <h3 className="feature-title">Interactive Seat Selection</h3>
            <p className="feature-desc">Choose your preferred seat layout, sleeper decks, or window seats in real-time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
