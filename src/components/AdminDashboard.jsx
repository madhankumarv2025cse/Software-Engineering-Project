import React, { useState } from 'react';
import { Bus, Ticket, Users, DollarSign, Plus, Edit, Trash2, Route, ShieldAlert } from 'lucide-react';
import { INITIAL_ADMIN_BUSES, INITIAL_ADMIN_ROUTES, INITIAL_ADMIN_USERS } from '../mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('buses'); // buses, routes, bookings, users
  const [buses, setBuses] = useState(INITIAL_ADMIN_BUSES);
  const [routes, setRoutes] = useState(INITIAL_ADMIN_ROUTES);
  const [users, setUsers] = useState(INITIAL_ADMIN_USERS);
  const [showAddBusModal, setShowAddBusModal] = useState(false);
  const [newBus, setNewBus] = useState({ operator: '', route: 'Mumbai - Pune', type: 'Volvo A/C Sleeper', fare: 500, seats: 36 });

  const handleAddBus = (e) => {
    e.preventDefault();
    const created = {
      id: `BUS${Math.floor(100 + Math.random() * 900)}`,
      operator: newBus.operator || 'Express Travels',
      route: newBus.route,
      type: newBus.type,
      fare: Number(newBus.fare),
      seats: Number(newBus.seats),
      status: 'Active'
    };
    setBuses([...buses, created]);
    setShowAddBusModal(false);
    setNewBus({ operator: '', route: 'Mumbai - Pune', type: 'Volvo A/C Sleeper', fare: 500, seats: 36 });
  };

  const handleDeleteBus = (id) => {
    if (window.confirm(`Delete Bus ${id}?`)) {
      setBuses(buses.filter(b => b.id !== id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '0.2rem' }}>
            Software Engineering Project Admin Dashboard
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            System control panel for managing buses, routes, user accounts, and bookings.
          </p>
        </div>
      </div>

      {/* Top Key Metrics Cards */}
      <div className="admin-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Bus size={24} />
          </div>
          <div>
            <div className="stat-val">{buses.length}</div>
            <div className="stat-lbl">Active Fleet Buses</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#ecfdf5', color: '#047857' }}>
            <Ticket size={24} />
          </div>
          <div>
            <div className="stat-val">1,420</div>
            <div className="stat-lbl">Total Bookings</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
            <Users size={24} />
          </div>
          <div>
            <div className="stat-val">{users.length}</div>
            <div className="stat-lbl">Registered Users</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#f3e8ff', color: '#6b21a8' }}>
            <DollarSign size={24} />
          </div>
          <div>
            <div className="stat-val">₹12,45,000</div>
            <div className="stat-lbl">System Revenue</div>
          </div>
        </div>
      </div>

      {/* Admin Management Navigation Tabs */}
      <div className="payment-tabs" style={{ marginBottom: '1.25rem' }}>
        <button 
          className={`pay-tab ${activeTab === 'buses' ? 'active' : ''}`}
          onClick={() => setActiveTab('buses')}
        >
          <Bus size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Manage Buses ({buses.length})
        </button>
        <button 
          className={`pay-tab ${activeTab === 'routes' ? 'active' : ''}`}
          onClick={() => setActiveTab('routes')}
        >
          <Route size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Manage Routes ({routes.length})
        </button>
        <button 
          className={`pay-tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Manage Users ({users.length})
        </button>
      </div>

      {/* Tab 1: Manage Buses Table */}
      {activeTab === 'buses' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button className="btn-search" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => setShowAddBusModal(true)}>
              <Plus size={16} /> Add New Bus
            </button>
          </div>

          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>BUS ID</th>
                  <th>OPERATOR</th>
                  <th>ROUTE</th>
                  <th>TYPE</th>
                  <th>FARE</th>
                  <th>SEATS</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {buses.map((bus) => (
                  <tr key={bus.id}>
                    <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{bus.id}</td>
                    <td><strong>{bus.operator}</strong></td>
                    <td>{bus.route}</td>
                    <td>{bus.type}</td>
                    <td>₹{bus.fare}</td>
                    <td>{bus.seats}</td>
                    <td>
                      <span className={`badge-${bus.status === 'Active' ? 'active' : 'warning'}`}>
                        {bus.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        style={{ background: 'none', border: 'none', color: 'var(--danger)', cursor: 'pointer' }}
                        onClick={() => handleDeleteBus(bus.id)}
                        title="Delete Bus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Manage Routes Table */}
      {activeTab === 'routes' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ROUTE ID</th>
                <th>SOURCE</th>
                <th>DESTINATION</th>
                <th>DISTANCE</th>
                <th>AVG DURATION</th>
                <th>ACTIVE BUSES</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r) => (
                <tr key={r.id}>
                  <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{r.id}</td>
                  <td><strong>{r.source}</strong></td>
                  <td><strong>{r.destination}</strong></td>
                  <td>{r.distance}</td>
                  <td>{r.avgDuration}</td>
                  <td>{r.activeBuses} Daily</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Manage Users Table */}
      {activeTab === 'users' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>USER ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ROLE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{u.id}</td>
                  <td><strong>{u.name}</strong></td>
                  <td>{u.email}</td>
                  <td>{u.phone}</td>
                  <td>{u.role}</td>
                  <td>
                    <span className="badge-active">{u.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Adding New Bus */}
      {showAddBusModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 }}>
          <div className="form-card" style={{ width: '100%', maxWidth: '500px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 700 }}>Add New Bus to Fleet</h3>
            <form onSubmit={handleAddBus}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Operator Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Royal Express" 
                  value={newBus.operator}
                  onChange={(e) => setNewBus({ ...newBus, operator: e.target.value })}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Route</label>
                <select 
                  className="form-select"
                  value={newBus.route}
                  onChange={(e) => setNewBus({ ...newBus, route: e.target.value })}
                >
                  <option value="Mumbai - Pune">Mumbai - Pune</option>
                  <option value="Bengaluru - Chennai">Bengaluru - Chennai</option>
                  <option value="Delhi - Jaipur">Delhi - Jaipur</option>
                  <option value="Hyderabad - Vijayawada">Hyderabad - Vijayawada</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Bus Type</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. Volvo Multi-Axle A/C Sleeper" 
                  value={newBus.type}
                  onChange={(e) => setNewBus({ ...newBus, type: e.target.value })}
                  required
                />
              </div>

              <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Fare (₹)</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={newBus.fare}
                    onChange={(e) => setNewBus({ ...newBus, fare: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Total Seats</label>
                  <input 
                    type="number" 
                    className="form-input" 
                    value={newBus.seats}
                    onChange={(e) => setNewBus({ ...newBus, seats: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowAddBusModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-search">
                  Save & Add Bus
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
