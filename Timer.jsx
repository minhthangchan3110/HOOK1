import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 5000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}