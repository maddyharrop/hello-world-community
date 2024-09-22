// UpcomingEvents.js
import React from 'react';
import Countdown from './Countdown';

const UpcomingEvents = () => {
  const eventDate = new Date("2024-09-24T00:00:00");

  return (
    <div>
      <h1>Upcoming Events</h1>
      <Countdown targetDate={eventDate} />
    </div>
  );
};

export default UpcomingEvents;
