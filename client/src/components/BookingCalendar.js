import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

const BookingCalendar = () => {
  const [isBooked, setIsBooked] = useState([
    new Date(2023, 7, 5), // August 5, 2023 (example booked date)
    new Date(2023, 7, 10), // August 10, 2023 (example booked date)
  ]);

  const tileContent = ({ date }) => {
    const isDateBooked = isBooked.some((bookedDate) => {
      return new Date(bookedDate).toDateString() === date.toDateString();
    });

    return isDateBooked ? <div className="red-slot"></div> : <div className="green-slot"></div>;
  };

  return (
    <div>
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default BookingCalendar;
