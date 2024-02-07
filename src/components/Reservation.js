import React, { useState } from 'react';
import './Reservation.css'

const Reservation = () => {
  // State variables to store form data
  const [date, setDate] = useState('');
  const [numDiners, setNumDiners] = useState('');
  const [occasion, setOccasion] = useState('');
  const [time, setTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const generateTimeOptions = () => {
    const times = [
      '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
      '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
      '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
      '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
      '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
      '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
      '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM',
      '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
    ];
  
    return times.map((time) => (
      <option key={time} value={time}>{time}</option>
    ));
  };
  


  // Handler functions to update state variables
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNumDinersChange = (e) => {
    setNumDiners(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // Submit handler function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, numDiners, occasion, time });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{backgroundColor: '#495E57'}}>
      <div>
        <label>Select Date:</label>
        <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} />
      </div>
      <div>
        <label htmlFor="numDiners">Number of Diners:</label>
        <select id="numDiners" value={numDiners} onChange={handleNumDinersChange}>
          <option value="">No.of Diners</option>
          {[...Array(10).keys()].map((number) => (
          <option key={number} value={number + 1}>{number + 1}</option>
        ))}
        </select>
</div>
        <div>
          <label htmlFor='occassion'>Occasion:</label>
          <select id='occassion'>
            <option value=''>Set Occasion</option>
            <option value=''>Birthday</option>
            <option value=''>Engagement</option>
            <option value=''>Anniversary</option>
          </select>
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select id="time" value={time} onChange={handleTimeChange}>
            <option value="">Select Time</option>
            {generateTimeOptions()}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reservation;
