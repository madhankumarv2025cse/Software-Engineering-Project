export const CITIES = [
  "Mumbai", "Pune", "Bengaluru", "Chennai", "Delhi", "Jaipur", 
  "Hyderabad", "Vijayawada", "Goa", "Ahmedabad", "Kolkata", "Coimbatore"
];

export const POPULAR_ROUTES = [
  { id: 1, from: "Mumbai", to: "Pune", duration: "3h 30m", price: 450, image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=80", busesAvailable: 28 },
  { id: 2, from: "Bengaluru", to: "Chennai", duration: "6h 15m", price: 650, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80", busesAvailable: 35 },
  { id: 3, from: "Delhi", to: "Jaipur", duration: "5h 00m", price: 550, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=80", busesAvailable: 42 },
  { id: 4, from: "Hyderabad", to: "Vijayawada", duration: "4h 45m", price: 490, image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&auto=format&fit=crop&q=80", busesAvailable: 20 }
];

export const MOCK_BUSES = [
  {
    id: "BUS101",
    operator: "VRL Travels",
    busType: "Volvo Multi-Axle A/C Sleeper (2+1)",
    isAC: true,
    departureTime: "06:00 AM",
    arrivalTime: "09:30 AM",
    duration: "3h 30m",
    price: 650,
    rating: 4.8,
    totalSeats: 36,
    availableSeats: 14,
    departurePeriod: "morning", // morning, afternoon, evening, night
    amenities: ["Wi-Fi", "Water Bottle", "Charging Point", "Blanket", "Live Tracking"]
  },
  {
    id: "BUS102",
    operator: "SRS Travels",
    busType: "Scania A/C Multi-Axle Seater (2+2)",
    isAC: true,
    departureTime: "08:15 AM",
    arrivalTime: "11:45 AM",
    duration: "3h 30m",
    price: 450,
    rating: 4.5,
    totalSeats: 40,
    availableSeats: 22,
    departurePeriod: "morning",
    amenities: ["Charging Point", "Water Bottle", "Reading Light"]
  },
  {
    id: "BUS103",
    operator: "MSRTC Shivneri",
    busType: "Volvo Premium A/C Seater (2+2)",
    isAC: true,
    departureTime: "01:30 PM",
    arrivalTime: "05:00 PM",
    duration: "3h 30m",
    price: 520,
    rating: 4.6,
    totalSeats: 40,
    availableSeats: 8,
    departurePeriod: "afternoon",
    amenities: ["Wi-Fi", "Water Bottle", "Emergency Contact"]
  },
  {
    id: "BUS104",
    operator: "Orange Tours & Travels",
    busType: "Non-A/C Sleeper (2+1)",
    isAC: false,
    departureTime: "06:30 PM",
    arrivalTime: "10:15 PM",
    duration: "3h 45m",
    price: 380,
    rating: 4.2,
    totalSeats: 30,
    availableSeats: 19,
    departurePeriod: "evening",
    amenities: ["Charging Point", "Reading Light"]
  },
  {
    id: "BUS105",
    operator: "National Travels",
    busType: "Non-A/C Seater Push Back (2+2)",
    isAC: false,
    departureTime: "10:30 PM",
    arrivalTime: "02:00 AM",
    duration: "3h 30m",
    price: 320,
    rating: 4.0,
    totalSeats: 44,
    availableSeats: 27,
    departurePeriod: "night",
    amenities: ["Emergency Contact"]
  }
];

export const INITIAL_BOOKINGS = [
  {
    bookingId: "BT-2026-8941",
    busName: "VRL Travels",
    busType: "Volvo Multi-Axle A/C Sleeper",
    route: "Mumbai → Pune",
    date: "2026-10-12",
    departureTime: "06:00 AM",
    seats: ["A3", "A4"],
    passengerName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    amount: 1300,
    status: "Confirmed",
    bookedOn: "2026-10-04"
  },
  {
    bookingId: "BT-2026-4102",
    busName: "SRS Travels",
    busType: "Scania A/C Seater",
    route: "Bengaluru → Chennai",
    date: "2026-09-28",
    departureTime: "08:15 AM",
    seats: ["B1"],
    passengerName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    amount: 650,
    status: "Completed",
    bookedOn: "2026-09-25"
  },
  {
    bookingId: "BT-2026-1930",
    busName: "Orange Tours & Travels",
    busType: "Non-A/C Sleeper",
    route: "Delhi → Jaipur",
    date: "2026-09-15",
    departureTime: "06:30 PM",
    seats: ["L5"],
    passengerName: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    amount: 380,
    status: "Cancelled",
    bookedOn: "2026-09-10"
  }
];

export const INITIAL_ADMIN_BUSES = [
  { id: "BUS101", operator: "VRL Travels", route: "Mumbai - Pune", type: "Volvo A/C Sleeper", fare: 650, seats: 36, status: "Active" },
  { id: "BUS102", operator: "SRS Travels", route: "Bengaluru - Chennai", type: "Scania A/C Seater", fare: 450, seats: 40, status: "Active" },
  { id: "BUS103", operator: "MSRTC Shivneri", route: "Mumbai - Pune", type: "Volvo A/C Seater", fare: 520, seats: 40, status: "Active" },
  { id: "BUS104", operator: "Orange Tours", route: "Delhi - Jaipur", type: "Non-A/C Sleeper", fare: 380, seats: 30, status: "Maintenance" }
];

export const INITIAL_ADMIN_ROUTES = [
  { id: "R01", source: "Mumbai", destination: "Pune", distance: "150 km", avgDuration: "3h 30m", activeBuses: 28 },
  { id: "R02", source: "Bengaluru", destination: "Chennai", distance: "348 km", avgDuration: "6h 15m", activeBuses: 35 },
  { id: "R03", source: "Delhi", destination: "Jaipur", distance: "280 km", avgDuration: "5h 00m", activeBuses: 42 },
  { id: "R04", source: "Hyderabad", destination: "Vijayawada", distance: "275 km", avgDuration: "4h 45m", activeBuses: 20 }
];

export const INITIAL_ADMIN_USERS = [
  { id: "USR001", name: "Rahul Sharma", email: "rahul@example.com", phone: "9876543210", role: "Passenger", bookings: 3, status: "Active" },
  { id: "USR002", name: "Priya Patel", email: "priya@example.com", phone: "9812345678", role: "Passenger", bookings: 1, status: "Active" },
  { id: "USR003", name: "Admin Officer", email: "admin@busreservation.com", phone: "9988776655", role: "Administrator", bookings: 0, status: "Active" }
];
