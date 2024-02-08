import React, { useState } from 'react';
import './Reservation.css'; // Import CSS file for styling

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
    <div className="reservation-container" style={{ backgroundColor: '#495E57' }}>
      <form onSubmit={handleSubmit} >
        <h1>Reserve a table</h1>
        <div className="grid-container">
         <div>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="fullName" id="fullName" placeholder="Elizabeth Bennet" required={true} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="littlelemon@gmail.com" required={true}/>
          </div>
          <div>
            <label>Select Date</label>
            <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} required={true} />
          </div>
          <div>
            <label htmlFor="numDiners">Number of Diners</label>
            <select id="numDiners" value={numDiners} onChange={handleNumDinersChange} required={true}>
              <option value="">No.of Diners</option>
              {[...Array(10).keys()].map((number) => (
                <option key={number} value={number + 1}>{number + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor='occasion'>Occasion</label>
            <select id='occassion' value={occasion} onChange={handleOccasionChange}>
              <option value=''>Set Occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Engagement'>Engagement</option>
              <option value='Anniversary'>Anniversary</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <select id="time" value={time} onChange={handleTimeChange} required={true}>
              <option value="">Select Time</option>
              {generateTimeOptions()}
            </select>
          </div>
          <div>
            <label htmlFor='specialNote'>Special Note</label>
            <textarea type='text' id="specialNote" placeholder='Write any additional information we need to know'/>
          </div>
        </div>
        <button type="submit">Continue</button>
      </form>
      
    </div>
  );
};

export default Reservation;

