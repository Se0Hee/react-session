import React, { useState, useEffect } from 'react';

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Effect Component</h2>
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default EffectComponent;
