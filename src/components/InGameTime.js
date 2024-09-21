import React, { useState, useEffect } from 'react';

const GameTime = () => {
  const [gameTime, setGameTime] = useState('');

  const calculateGameTime = () => {
    const now = new Date();
    const realMinutes = now.getMinutes();
    const realSeconds = now.getSeconds();
    const realTimeInMinutes = realMinutes + realSeconds / 60;

    // Each 15 real minutes corresponds to 6 in-game hours
    const inGameMinutesPerRealMinute = 24; // 1 real minute = 24 in-game minutes
    const totalInGameMinutes = (realTimeInMinutes * inGameMinutesPerRealMinute) % 1440; // Total in-game minutes (1440 minutes in a 24-hour day)

    // Calculate in-game hours and minutes
    const inGameHours = Math.floor(totalInGameMinutes / 60);
    const inGameMinutes = Math.floor(totalInGameMinutes % 60);

    // Convert to 12-hour format and set AM/PM
    const ampm = inGameHours >= 12 ? 'PM' : 'AM';
    const formattedHours = inGameHours % 12 === 0 ? 12 : inGameHours % 12;
    const formattedMinutes = inGameMinutes.toString().padStart(2, '0');

    setGameTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
  };

  useEffect(() => {
    // Update the game time every second to keep it in sync
    const interval = setInterval(calculateGameTime, 1000);
    calculateGameTime(); // Initial calculation

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='GameTime'>
      <h2>In-Game Time:</h2>
      <p>{gameTime}</p>
    </div>
  );
};

export default GameTime;
