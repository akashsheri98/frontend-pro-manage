import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = ({ onSelect }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onSelect(newDate);
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <div>Date: {date.toDateString()}</div>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default CustomCalendar;