// Countdown.js
import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      setTimeLeft(timeLeft);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="ContentSection">
      <h2>Countdown to the next update:</h2>
      {timeLeft.days ? `${timeLeft.days} days ` : ''}
      {timeLeft.hours ? `${timeLeft.hours} hours ` : ''}
      {timeLeft.minutes ? `${timeLeft.minutes} minutes ` : ''}
      {timeLeft.seconds ? `${timeLeft.seconds} seconds` : ''}
    </div>
  );
};

export default Countdown;
