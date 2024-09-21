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
    <div className="background_countdown">
      <div className='countdown-text'>
        <div className="countdown-item days">
          <h3>Days</h3>
          <p>{timeLeft.days ? timeLeft.days : '0'}</p>
        </div>
        <div className="countdown-item">
          <h3>Hours</h3>
          <p>{timeLeft.hours ? timeLeft.hours : '0'}</p>
        </div>
        <div className="countdown-item">
          <h3>Minutes</h3>
          <p>{timeLeft.minutes ? timeLeft.minutes : '0'}</p>
        </div>
        <div className="countdown-item">
          <h3>Seconds</h3>
          <p>{timeLeft.seconds ? timeLeft.seconds : '0'}</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
