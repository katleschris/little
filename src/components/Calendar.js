import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      // Handle reservation submission here, e.g., send data to server
      console.log('Reservation made:', selectedDate, selectedTime);
      // Reset selected date and time
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      alert('Please select both date and time.');
    }
  };

  return (
    <div>
      <h2>Select Date and Time for Reservation</h2>
      <div>
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} />
      </div>
      <div>
        <label>Select Time:</label>
        <input type="time" value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Make Reservation</button>
    </div>
  );
};

export default Calendar;

