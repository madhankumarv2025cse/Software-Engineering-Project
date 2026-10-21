import React from 'react';
import { Bus, Search, Ticket, User, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, isLoggedIn, setIsLoggedIn, userRole, setUserRole }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => setActivePage('home')}>
          <div className="logo-icon">
            <Bus size={22} />
          </div>
          <span>BusReserve</span>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-btn ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => setActivePage('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${activePage === 'search' ? 'active' : ''}`}
                onClick={() => setActivePage('search')}
              >
                <Search size={16} /> Search Buses
              </button>
            </li>
            <li>
              <button 
                className={`nav-btn ${activePage === 'my-bookings' ? 'active' : ''}`}
                onClick={() => setActivePage('my-bookings')}
              >
                <Ticket size={16} /> My Bookings
              </button>
            </li>

            {/* Admin toggle for SE viva presentation */}
            <li>
              <button 
                className={`nav-btn admin-btn ${activePage === 'admin' ? 'active' : ''}`}
                onClick={() => setActivePage('admin')}
              >
                <LayoutDashboard size={16} /> Admin Portal
              </button>
            </li>

            {isLoggedIn ? (
              <li>
                <button 
                  className="nav-btn primary-btn"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setUserRole('passenger');
                    setActivePage('home');
                  }}
                >
                  Logout ({userRole === 'admin' ? 'Admin' : 'Rahul'})
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button 
                    className={`nav-btn ${activePage === 'login' ? 'active' : ''}`}
                    onClick={() => setActivePage('login')}
                  >
                    <LogIn size={16} /> Login
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-btn primary-btn ${activePage === 'register' ? 'active' : ''}`}
                    onClick={() => setActivePage('register')}
                  >
                    <UserPlus size={16} /> Register
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
