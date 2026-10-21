import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BusSearch from './components/BusSearch';
import SeatSelection from './components/SeatSelection';
import PassengerDetails from './components/PassengerDetails';
import PaymentPage from './components/PaymentPage';
import BookingConfirmation from './components/BookingConfirmation';
import MyBookings from './components/MyBookings';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import AdminDashboard from './components/AdminDashboard';
import { INITIAL_BOOKINGS, MOCK_BUSES } from './mockData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('passenger'); // passenger, admin

  // Search Parameters
  const [searchState, setSearchState] = useState({
    from: 'Mumbai',
    to: 'Pune',
    date: '2026-10-12'
  });

  // Selected Booking Flow State
  const [selectedBus, setSelectedBus] = useState(MOCK_BUSES[0]);
  const [selectedSeats, setSelectedSeats] = useState(['A3']);
  const [passengerInfo, setPassengerInfo] = useState({
    name: 'Rahul Sharma',
    age: '26',
    gender: 'Male',
    mobile: '9876543210',
    email: 'rahul.sharma@example.com'
  });

  // Bookings list state
  const [bookingsList, setBookingsList] = useState(INITIAL_BOOKINGS);
  const [confirmedBookingData, setConfirmedBookingData] = useState(INITIAL_BOOKINGS[0]);

  // Handlers for Navigation Flow
  const handleSearchBuses = () => {
    setActivePage('search');
  };

  const handleSelectBus = (bus) => {
    setSelectedBus(bus);
    setSelectedSeats(['A3']); // default pre-selection
    setActivePage('seats');
  };

  const handleSeatsProceed = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat to proceed.');
      return;
    }
    setActivePage('passenger');
  };

  const handlePassengerProceed = () => {
    setActivePage('payment');
  };

  const handlePaymentSuccess = () => {
    const newBookingId = `BT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const totalAmount = selectedSeats.length * selectedBus.price;
    const newBooking = {
      bookingId: newBookingId,
      busName: selectedBus.operator,
      busType: selectedBus.busType,
      route: `${searchState.from} → ${searchState.to}`,
      date: searchState.date,
      departureTime: selectedBus.departureTime,
      seats: selectedSeats,
      passengerName: passengerInfo.name || 'Rahul Sharma',
      email: passengerInfo.email,
      phone: passengerInfo.mobile,
      amount: totalAmount,
      status: 'Confirmed',
      bookedOn: new Date().toISOString().split('T')[0]
    };

    setBookingsList([newBooking, ...bookingsList]);
    setConfirmedBookingData(newBooking);
    setActivePage('confirmation');
  };

  const handleViewSpecificTicket = (booking) => {
    setConfirmedBookingData(booking);
    setActivePage('confirmation');
  };

  return (
    <div className="app-container">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userRole={userRole}
        setUserRole={setUserRole}
      />

      <main className="main-content">
        {activePage === 'home' && (
          <HomePage 
            searchState={searchState} 
            setSearchState={setSearchState}
            onSearch={handleSearchBuses}
          />
        )}

        {activePage === 'search' && (
          <BusSearch 
            searchState={searchState}
            onSelectBus={handleSelectBus}
          />
        )}

        {activePage === 'seats' && (
          <SeatSelection 
            bus={selectedBus}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            onProceed={handleSeatsProceed}
            onBack={() => setActivePage('search')}
          />
        )}

        {activePage === 'passenger' && (
          <PassengerDetails 
            passengerInfo={passengerInfo}
            setPassengerInfo={setPassengerInfo}
            selectedSeats={selectedSeats}
            bus={selectedBus}
            onProceed={handlePassengerProceed}
            onBack={() => setActivePage('seats')}
          />
        )}

        {activePage === 'payment' && (
          <PaymentPage 
            bus={selectedBus}
            selectedSeats={selectedSeats}
            passengerInfo={passengerInfo}
            searchState={searchState}
            onPaymentSuccess={handlePaymentSuccess}
            onBack={() => setActivePage('passenger')}
          />
        )}

        {activePage === 'confirmation' && (
          <BookingConfirmation 
            bookingData={confirmedBookingData}
            onGoHome={() => setActivePage('home')}
            onViewMyBookings={() => setActivePage('my-bookings')}
          />
        )}

        {activePage === 'my-bookings' && (
          <MyBookings 
            bookingsList={bookingsList}
            setBookingsList={setBookingsList}
            onViewTicket={handleViewSpecificTicket}
          />
        )}

        {activePage === 'login' && (
          <LoginPage 
            onLoginSuccess={(role) => {
              setIsLoggedIn(true);
              setUserRole(role);
              setActivePage(role === 'admin' ? 'admin' : 'home');
            }}
            onGoRegister={() => setActivePage('register')}
          />
        )}

        {activePage === 'register' && (
          <RegisterPage 
            onRegisterSuccess={() => setActivePage('login')}
            onGoLogin={() => setActivePage('login')}
          />
        )}

        {activePage === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      <Footer />
    </div>
  );
}
