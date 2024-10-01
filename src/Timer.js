import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ title, offset }) => {
  const [date, setDate] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setDate(new Date());
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const formatDate = (date) => {
    const localTime = new Date(date.getTime() + offset * 3600 * 1000);
    return localTime.toLocaleString();
  };

  return (
    <div className="timer">
      <h2>{title}</h2>
      <p>{formatDate(date)}</p>
      <button onClick={isRunning ? handleStop : handleStart}>
        {isRunning ? 'Зупинити' : 'Запустити'}
      </button>
    </div>
  );
};

export default Timer;
